import { responseHelper } from "../helpers/index.js";
import { categoriesService } from "../services/categories.services.js";

async function listAll(req, res) {
	try {
		const categories = await categoriesService.listAll();
		return responseHelper.OK({ res, body: categories });
	} catch (error) {
		return responseHelper.SERVER_ERROR({ res });
	}
}

const categoriesController = { listAll };

export { categoriesController };
