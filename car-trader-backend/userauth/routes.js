import { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
  verifyAccount,
  restPassword,
  createPassword,
  checkAuth,
} from "./controllers.js";

export const routes = new Router();

// routes.post("/check-auth", checkAuth);
routes.post("/signup", signUp);
routes.post("/signin", signIn);
routes.post("/signout", signOut);
routes.post("/verify-account", verifyAccount);
routes.post("/reset-password", restPassword);
routes.post("/new-password", createPassword);
