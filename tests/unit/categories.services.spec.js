import { jest } from "@jest/globals";
import { categoriesService } from "../../src/services/categories.services.js";
import { categoriesRepository } from "../../src/repositories/categories.repository.js";

describe("categories service unit test swite", () => {
	it("should return an empty array when there is no categories to list", async () => {
		jest
			.spyOn(categoriesRepository, "findAll")
			.mockImplementationOnce(() => new Promise((resolve) => resolve([])));

		const result = await categoriesService.listAll();

		expect(result).toEqual([]);
	});

	it("should return an array of categories when listing", async () => {
		const category = {
			_id: "123",
			name: "category_name",
			updatedAt: 1680388703762,
			createdAt: 1680388703762,
		};

		jest
			.spyOn(categoriesRepository, "findAll")
			.mockImplementationOnce(
				() => new Promise((resolve) => resolve([category]))
			);

		const result = await categoriesService.listAll();

		expect(result).toEqual([category]);
	});
});
