import { ObjectId } from "mongodb";
import { responseHelper } from "../helpers/index.js";
import { productsService } from "../services/products.services.js";

async function listAll(req, res) {
	const page = parseInt(req.query.page);
	const {
		name = "",
		minPrice = 0,
		maxPrice = Number.POSITIVE_INFINITY,
		promotion = "any",
	} = req.query;

	if (isInvalidPage(page)) {
		return responseHelper.BAD_REQUEST({
			res,
			message: "Página inválida!",
		});
	}

	try {
		const products = await productsService.listAll({
			page,
			name,
			minPrice: Number(minPrice),
			maxPrice: Number(maxPrice),
			promotion,
		});

		return responseHelper.OK({ res, body: products });
	} catch (error) {
		return responseHelper.SERVER_ERROR({ res });
	}
}

async function findById(req, res) {
	let id;

	try {
		id = new ObjectId(req.params.id);
	} catch (error) {
		return responseHelper.BAD_REQUEST({
			res,
			message: "Id de produto inválido!",
		});
	}

	try {
		const product = await productsService.findById(id);
		return responseHelper.OK({ res, body: product });
	} catch (error) {
		if (error.message === "Not Found") {
			return responseHelper.NOT_FOUND({
				res,
				message: "Não foi possível encontrar esse produto!",
			});
		}

		return responseHelper.SERVER_ERROR({ res });
	}
}

function isInvalidPage(page) {
	return isNaN(page) || page < 1;
}

const productsController = { listAll, findById };

export { productsController };
