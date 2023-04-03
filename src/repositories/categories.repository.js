import { mongo } from "../database/database.js";
import { MONGO_COLLECTIONS_ENUM } from "../enums/index.js";

const db = await mongo();

function findAll() {
	return db.collection(MONGO_COLLECTIONS_ENUM.CATEGORIES).find().toArray();
}

const categoriesRepository = { findAll };

export { categoriesRepository };
