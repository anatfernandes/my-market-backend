import { jest } from "@jest/globals";
import { productsService } from "../../src/services/products.services.js";
import { productsRepository } from "../../src/repositories/products.repository.js";
import { categoriesRepository } from "../../src/repositories/categories.repository.js";

describe("products service unit test swite", () => {
	it("should return an empty array when there is no product to list", async () => {
		jest
			.spyOn(productsRepository, "findAll")
			.mockImplementationOnce(() => Promise.resolve([]));

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
			.mockImplementationOnce(() => Promise.resolve([product]));

		const result = await productsService.listAll();

		expect(result).toEqual([formattedProduct]);
	});

	it("should return an error when there is no product with given id", () => {
		jest
			.spyOn(productsRepository, "findById")
			.mockImplementationOnce(() => Promise.resolve(null));

		const result = productsService.findById("123");

		expect(result).rejects.toBeInstanceOf(Error);
	});

	it("should return an error when there is no category for product with given id", () => {
		const product = {
			_id: "123",
			name: "product_name",
			description: "product_description",
			image: "https://product_name.jpg",
			categoryId: "12345",
			originalPrice: 2500,
			isPromotion: false,
			promotionPrice: null,
			updatedAt: 12345,
			createdAt: 67890,
		};

		jest
			.spyOn(productsRepository, "findById")
			.mockImplementationOnce(() => Promise.resolve(product));

		jest
			.spyOn(categoriesRepository, "findById")
			.mockImplementationOnce(() => Promise.resolve(null));

		const result = productsService.findById("123");

		expect(result).rejects.toBeInstanceOf(Error);
	});

	it("should return the product with given id formatted", async () => {
		const product = {
			_id: "123",
			name: "product_name",
			description: "product_description",
			image: "https://product_name.jpg",
			categoryId: "12345",
			originalPrice: 2500,
			isPromotion: false,
			promotionPrice: null,
			updatedAt: 12345,
			createdAt: 67890,
		};

		jest
			.spyOn(productsRepository, "findById")
			.mockImplementationOnce(() => Promise.resolve(product));

		jest
			.spyOn(categoriesRepository, "findById")
			.mockImplementationOnce(() => Promise.resolve({ name: "category" }));

		const result = await productsService.findById();

		expect(result).toEqual({ ...product, categoryName: "category" });
	});
});
