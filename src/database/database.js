import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

export async function mongo() {
	try {
		const connect = mongoClient.db(process.env.MONGO_DATABASE_NAME);
		return connect;
	} catch (error) {
		console.error(error);
		return error;
	}
}
