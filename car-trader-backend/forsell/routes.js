import { Router } from "express";
import { uploadCarImages } from "../configuration/multer.js";
import { checkAuth } from "./middleware.js";

import {
  uploadcar,
  deleteCar,
  getAllCars,
  getSingleCar,
  myListings,
} from "./controllers.js";

export const routes = new Router();

routes.post("/uploadcar", checkAuth, uploadCarImages, uploadcar);
routes.delete("/delete/:id", checkAuth, deleteCar);
routes.get("/get-all", getAllCars);
routes.get("/get-one/:id", getSingleCar);
routes.get("/my-listings/", checkAuth, myListings);
