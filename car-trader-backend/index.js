/////////// IMPORTING
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import { routes as authRoutes } from "./userauth/routes.js";
import { routes as forSellRoutes } from "./forsell/routes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://www.car-trader.site"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.send("Welcome to the Car Rental API");
});

app.use("/api/auth", authRoutes);
app.use("/api/sell", forSellRoutes);

//////////////////////////////////////////////////
async function connectToDB() {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);
    console.log(`connect to database ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

app.listen(5000, async () => {
  console.log(`Server running on http://localhost:5000`);
  await connectToDB();
});
