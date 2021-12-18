/* eslint-disable no-undef */

const { ExpenseTestRepository } = require("./ExpenseTestRepository");

describe(("Test of expense repository"), () => {

	test("Should create test expense", async () => {
		const repository = new ExpenseTestRepository();
		await repository.createTestTaskAndUser();
	});

	test("Should remove test expense", async () => {
		const repository = new ExpenseTestRepository();
		await repository.deleteTestTaskAndUser();
	});

});