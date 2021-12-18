/* eslint-disable no-undef */

jest.setTimeout(15000);

const { ExpenseTestRepository } = require("../../../repositories/Expense/ExpenseTestRepository/ExpenseTestRepository");

const expenseTestRepository = new ExpenseTestRepository();

const request = require("supertest");

const app = require("../../../app");

describe("Get Expense Search", () => {

	beforeAll(async () => {
		expenseTestRepository.createTestTaskAndUser();
	});

	afterAll(async () => {
		expenseTestRepository.deleteTestTaskAndUser();
	});

	test("Should not get expense, because the user not filled in the search filed", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses/expenses-search")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseSearch: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha o campo de pesquisa de despesa");

	});

	test("Should get expense", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses/expenses-search")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseSearch: "Luz"
			});

		expect(response.statusCode).toBe(200);
		expect(response.body.response[0]._id).not.toBeUndefined();
		expect(response.body.response[0].expenseName).not.toBeUndefined();
		expect(response.body.response[0].dueDate).not.toBeUndefined();
		expect(response.body.response[0].price).not.toBeUndefined();

	});
});