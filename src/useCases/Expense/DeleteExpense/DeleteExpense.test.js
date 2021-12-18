/* eslint-disable no-undef */

jest.setTimeout(15000);

const { ExpenseTestRepository } = require("../../../repositories/Expense/ExpenseTestRepository/ExpenseTestRepository");

const expenseTestRepository = new ExpenseTestRepository();

const request = require("supertest");

const app = require("../../../app");

describe("Delete Expense", () => {

	beforeAll(async () => {
		expenseTestRepository.createTestTaskAndUser();
	});

	afterAll(async () => {
		expenseTestRepository.deleteTestTaskAndUser();
	});

	test("Should delete expense", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete("/expenses/delete/fe98bc1b-22f4-4fc6-be64-3d830068bdda")
			.set("Authorization", `Bearer ${token.body.response}`);
            
		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Despesa deletada com sucesso");
	});
});