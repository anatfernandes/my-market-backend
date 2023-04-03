import { responseHelper } from "../helpers/index.js";
import { productsService } from "../services/products.services.js";

async function listAll(req, res) {
	try {
		const products = await productsService.listAll();
		return responseHelper.OK({ res, body: products });
	} catch (error) {
		return responseHelper.SERVER_ERROR({ res });
	}
}

const productsController = { listAll };

export { productsController };
