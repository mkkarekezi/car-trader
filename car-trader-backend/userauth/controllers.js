import User from "./models.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { gentokencookie } from "../configuration/gentokencookie.js";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../configuration/mail-config.js";

//
export async function signUp(req, res) {
  // Logic for signing up a user
  //get some info from user like password username etc
  // we extract them from req.body which is request body

  try {
    const { username, email, password } = req.body;

    //check if the user has provided all the required fields
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // check if the user already exists
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }

    //hast thr password
    //he 10 controls how strong the password hashing is. A higher number makes it harder to crack but slower to process.
    const hashedpassword = await bcryptjs.hash(password, 10);

    //creating a verfication process to activate the user
    const verifytoken = Math.floor(100000 + Math.random() * 900000);
    const verifytokenexpire = Date.now() + 12 * 60 * 60 * 1000; // expering in 24 hours

    //creating a new user
    // User.create is the user schema
    const user = await User.create({
      username,
      email,
      password: hashedpassword,
      verifytoken,
      verifytokenexpire,
    });

    //saving the user to the db
    await user.save();

    //authenticating them in the clinet using a token
    gentokencookie(user._id, res);

    // sending email
    await sendVerificationEmail(user.email, verifytoken);

    //created
    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: {
        username: user.username,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

//
export async function verifyAccount(req, res) {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verifytoken: Number(code),
      verifytokenexpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid or expired verfication code ",
      });
    }

    user.isaccountverfied = true;
    user.verifytoken = undefined;
    user.verifytokenexpire = undefined;
    await user.save();

    await sendWelcomeEmail(user.email);
    res.status(200).json({
      success: true,
      message: "account verified ",
      user: {
        username: user.username,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

//
export async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    if (!user.isaccountverfied) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in",
      });
    }

    const ispassowrdvalid = await bcryptjs.compare(password, user.password);
    if (!ispassowrdvalid) {
      return res
        .status(400)
        .json({ success: false, message: "invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set cookie with proper options for cross-origin
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Always true for production HTTPS
      sameSite: "none", // Required for cross-origin cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    user.lastlogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "logged in successful",
      user: {
        username: user.username,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

//
export async function signOut(_req, res) {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
}

//
export async function restPassword(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }

    // Create reset token
    const resettoken = Math.floor(100000 + Math.random() * 900000);
    const resettokenexpire = Date.now() + 1 * 60 * 60 * 1000;

    user.resettoken = resettoken;
    user.resettokenexpire = resettokenexpire;
    await user.save(); // SAVE HERE!

    await PasswordReset(user.email, resettoken);

    res.status(200).json({
      success: true,
      message: "reset code sent to email",
    });
  } catch (error) {
    console.log("error in password reset request", error);
    res.status(400).json({ success: false, message: error.message });
  }
}

//
export async function createPassword(req, res) {
  const { token, password } = req.body; // Only token and password needed

  try {
    // Find user by reset token instead of email
    const user = await User.findOne({
      resettoken: Number(token),
      resettokenexpire: { $gt: Date.now() }, // Check expiration in query
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid or expired verification code",
      });
    }

    // Hash new password
    const newhashedpassword = await bcryptjs.hash(password, 10);
    user.password = newhashedpassword;
    user.resettoken = undefined;
    user.resettokenexpire = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "password reset successful",
    });
  } catch (error) {
    console.log("error in password reset", error);
    res.status(400).json({ success: false, message: error.message });
  }
}

//
export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
