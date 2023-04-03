import { productsRepository } from "../repositories/products.repository.js";

async function listAll() {
	const products = await productsRepository.findAll();

	const formattedProducts = products.map(
		({ description, originalPrice, promotionPrice, ...product }) => ({
			price: product.isPromotion ? promotionPrice : originalPrice,
			...product,
		})
	);

	return formattedProducts;
}

const productsService = { listAll };

export { productsService };
