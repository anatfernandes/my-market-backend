import { ObjectId } from "mongodb";
import { mongo } from "../database/database.js";
import { MONGO_COLLECTIONS_ENUM } from "../enums/index.js";

const db = await mongo();

function findAll() {
	return db.collection(MONGO_COLLECTIONS_ENUM.CATEGORIES).find().toArray();
}

function findById(id) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.CATEGORIES)
		.findOne({ _id: new ObjectId(id) });
}

const categoriesRepository = { findAll, findById };

export { categoriesRepository };
