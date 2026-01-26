import { Router } from "express";

import { filter } from "./controllers.js";

export const routes = new Router();

routes.get("/search", filter);
