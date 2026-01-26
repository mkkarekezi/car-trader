import jwt from "jsonwebtoken";

export function gentokencookie(userid, res) {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    // they will need to sign after 14days
    expiresIn: "14d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
  });

  return token;
}
