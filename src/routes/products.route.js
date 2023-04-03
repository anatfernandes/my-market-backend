import express from "express";
import { productsController } from "../controllers/products.controller.js";

const productsRoute = express.Router();

productsRoute.get("/", productsController.listAll);

export { productsRoute };
