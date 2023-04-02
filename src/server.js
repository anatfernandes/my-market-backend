import express from "express";
import cors from "cors";

const server = express();

server
	.use(express.json())
	.use(cors())
	.get("/health", (req, res) => 
		res.status(200).send("It is alive!!!")
	);

export { server };
