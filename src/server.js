import express from "express";
import cors from "cors";
import { responseHelper } from "./helpers/index.js";
import { productsRoute, categoriesRoute } from "./routes/index.js";

const server = express();

server
	.use(express.json())
	.use(cors())
	.get("/health", (req, res) =>
		responseHelper.OK({ res, body: "It is alive!!!" })
	)
	.use("/api/products", productsRoute)
	.use("/api/categories", categoriesRoute);

export { server };
