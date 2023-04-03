import express from "express";
import { productsController } from "../controllers/products.controller.js";

const productsRoute = express.Router();

productsRoute.get("/products", productsController.listAll);

export { productsRoute };
