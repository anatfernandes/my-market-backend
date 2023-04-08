import { productsRepository } from "../repositories/products.repository.js";
import { categoriesRepository } from "../repositories/categories.repository.js";

async function listAll({ page, name }) {
	const products = await productsRepository.findAll({
		page: {
			start: (page - 1) * 10,
			nPerPage: 10,
		},
		filter: {
			name,
		}
	});

	const formattedProducts = products.map(
		({ description, originalPrice, promotionPrice, ...product }) => ({
			price: product.isPromotion ? promotionPrice : originalPrice,
			...product,
		})
	);

	return formattedProducts;
}

async function findById(id) {
	const product = await productsRepository.findById(id);
	if (product === null) throw new Error("Not Found");

	const category = await categoriesRepository.findById(product.categoryId);
	if (category === null) throw new Error("Not Found");

	const formattedProduct = { ...product, categoryName: category.name };

	return formattedProduct;
}

const productsService = { listAll, findById };

export { productsService };
