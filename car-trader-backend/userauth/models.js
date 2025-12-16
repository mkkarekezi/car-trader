import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "the user name is required"],
      trim: true,
      lowercase: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v) => {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid username!`,
      },
    },
    email: {
      type: String,
      require: [true, "an email address is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      require: [true, "a password is required"],
      minLength: [8, "password must be at least 8 characters"],
    },
    isaccountverfied: {
      type: Boolean,
      default: false,
    },
    lastlogin: {
      type: Date,
      default: Date.now,
    },
    verifytoken: {
      type: String,
    },
    verifytokenexpire: {
      type: Date,
    },
    resettoken: {
      type: String,
    },
    resettokenexpire: {
      type: Date,
    },
  },
  { timestamps: true }
);

//
const User = mongoose.model("User", userSchema);
export default User;
