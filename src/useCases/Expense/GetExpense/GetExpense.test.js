/* eslint-disable no-undef */

jest.setTimeout(15000);

const { ExpenseTestRepository } = require("../../../repositories/Expense");

const expenseTestRepository = new ExpenseTestRepository();

const request = require("supertest");

const app = require("../../../app");

describe("Get Expenses", () => {

	beforeAll(async () => {
		expenseTestRepository.createTestTaskAndUser();
	});

	afterAll(async () => {
		expenseTestRepository.deleteTestTaskAndUser();
	});

	test("Should get expense", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.get("/expenses")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(200);
		expect(response.body.response[0]._id).not.toBeUndefined();
		expect(response.body.response[0].expenseName).not.toBeUndefined();
		expect(response.body.response[0].dueDate).not.toBeUndefined();
		expect(response.body.response[0].price).not.toBeUndefined();
	});
});