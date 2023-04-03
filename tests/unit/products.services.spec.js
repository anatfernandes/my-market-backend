import { jest } from "@jest/globals";
import { productsService } from "../../src/services/products.services.js";
import { productsRepository } from "../../src/repositories/products.repository.js";

describe("products service unit test swite", () => {
	it("should return an empty array when there is no product to list", async () => {
		jest
			.spyOn(productsRepository, "findAll")
			.mockImplementationOnce(() => new Promise((resolve) => resolve([])));

		const result = await productsService.listAll();

		expect(result).toEqual([]);
	});

	it("should return an array of formatted products when listing", async () => {
		const product = {
			_id: "123",
			name: "product_name",
			description: "product_description",
			image: "https://product_name.jpg",
			categoryId: "456",
			originalPrice: 1000,
			isPromotion: true,
			promotionPrice: 500,
			updatedAt: 3,
			createdAt: 7,
		};

		const formattedProduct = {
			_id: product._id,
			name: product.name,
			image: product.image,
			categoryId: product.categoryId,
			isPromotion: product.isPromotion,
			price: product.promotionPrice,
			updatedAt: product.updatedAt,
			createdAt: product.createdAt,
		};

		jest
			.spyOn(productsRepository, "findAll")
			.mockImplementationOnce(
				() => new Promise((resolve) => resolve([product]))
			);

		const result = await productsService.listAll();

		expect(result).toEqual([formattedProduct]);
	});
});
