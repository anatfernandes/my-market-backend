import { categoriesRepository } from "../repositories/categories.repository.js";

function listAll() {
	return categoriesRepository.findAll();
}

const categoriesService = { listAll };

export { categoriesService };
