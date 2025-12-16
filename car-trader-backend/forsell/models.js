// models.js
import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true],
      trim: true,
      lowercase: true,
    },
    releaseyear: {
      type: Number,
      required: true,
      min: [2007],
      max: [new Date().getFullYear()],
    },
    transmissiontype: {
      type: String,
      required: true,
      enum: ["manual", "automatic"],
    },
    fueltype: {
      type: String,
      required: true,
      enum: ["gasoline/diesel", "hybrid", "electric"],
    },
    numberofseats: {
      type: Number,
      required: true,
      min: 2,
      max: 20,
    },
    price: {
      type: Number,
      required: true,
      min: [1],
    },
    mileage: {
      type: Number,
      required: true,
      min: [0],
    },
    images: {
      fullview: {
        type: String,
        required: [true, "full view image is required"],
      },
      sideview: {
        type: String,
        required: [true, "side view image is required"],
      },
      backview: {
        type: String,
        required: [true, "back view image is required"],
      },
      insideview: {
        type: String,
        required: [true, "Inside view image is required"],
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

//creatting the model off a schema
const CarUpload = mongoose.model("CarUpload", carSchema);
export default CarUpload;
