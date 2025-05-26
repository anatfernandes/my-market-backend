import { ObjectId } from "mongodb";
import { mongo } from "../database/database.js";
import { MONGO_COLLECTIONS_ENUM } from "../enums/index.js";

const db = await mongo();

function findAll({
	page: { start, nPerPage },
	filter: { name, minPrice, maxPrice, promotion },
}) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.PRODUCTS)
		.find({
			$and: [
				{ name: { $regex: name, $options: "i" } },
				{
					$or: [
						{ originalPrice: { $gte: minPrice, $lte: maxPrice } },
						{ promotionPrice: { $gte: minPrice, $lte: maxPrice } },
					],
				},
				{
					isPromotion: { $in: promotion },
				},
			],
		})
		.skip(start)
		.limit(nPerPage)
		.toArray();
}

function findAllByCategoryId({
	page: { start, nPerPage },
	filter: { name, minPrice, maxPrice, promotion, categoryId },
}) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.PRODUCTS)
		.find({
			$and: [
				{ name: { $regex: name, $options: "i" } },
				{
					$or: [
						{ originalPrice: { $gte: minPrice, $lte: maxPrice } },
						{ promotionPrice: { $gte: minPrice, $lte: maxPrice } },
					],
				},
				{
					isPromotion: { $in: promotion },
				},
				{ categoryId },
			],
		})
		.skip(start)
		.limit(nPerPage)
		.toArray();
}

function findById(id) {
	return db
		.collection(MONGO_COLLECTIONS_ENUM.PRODUCTS)
		.findOne({ _id: new ObjectId(id) });
}

const productsRepository = { findAll, findAllByCategoryId, findById };

export { productsRepository };
