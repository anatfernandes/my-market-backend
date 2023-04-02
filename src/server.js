import express from "express";
import cors from "cors";
import { responseHelper } from "./helpers/index.js";

const server = express();

server
	.use(express.json())
	.use(cors())
	.get("/health", (req, res) =>
		responseHelper.OK({ res, body: "It is alive!!!" })
	);

export { server };
