import { productsRepository } from "../repositories/products.repository.js";
import { categoriesRepository } from "../repositories/categories.repository.js";

async function listAll({
	page,
	name,
	minPrice,
	maxPrice,
	promotion,
	categoryId,
}) {
	const repositoryFunction = categoryId ? "findAllByCategoryId" : "findAll";

	const products = await productsRepository[repositoryFunction]({
		page: {
			start: (page - 1) * 10,
			nPerPage: 10,
		},
		filter: {
			name,
			minPrice,
			maxPrice,
			promotion: getPromotionValue(promotion),
			categoryId,
		},
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

function getPromotionValue(promotion) {
	if (promotion === "true") return [true];
	if (promotion === "false") return [false];

	return [true, false];
}

const productsService = { listAll, findById };

export { productsService };
