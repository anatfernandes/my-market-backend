import { ObjectId } from "mongodb";
import { mongo } from "../database/database.js";
import { MONGO_COLLECTIONS_ENUM } from "../enums/index.js";

const db = await mongo();

function findAll({ start, nPerPage }) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.PRODUCTS)
		.find()
		.skip(start)
		.limit(nPerPage)
		.toArray();
}

function findById(id) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.PRODUCTS)
		.findOne({ _id: new ObjectId(id) });
}

const productsRepository = { findAll, findById };

export { productsRepository };
