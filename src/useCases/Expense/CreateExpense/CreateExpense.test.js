/* eslint-disable no-undef */

jest.setTimeout(15000);

const { ExpenseTestRepository } = require("../../../repositories/Expense");

const expenseTestRepository = new ExpenseTestRepository();

const request = require("supertest");

const app = require("../../../app");

describe("Create Expense", () => {

	beforeAll(async () => {
		expenseTestRepository.createTestTaskAndUser();
	});

	afterAll(async () => {
		expenseTestRepository.deleteTestTaskAndUser();
	});

	test("Should not create expense, because expense name field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseName: "",
				dueDate: "2021-08-20",
				price: 925
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not create expense, because due date field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseName: "Aluguel",
				dueDate: "",
				price: 925
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not create expense, because price field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseName: "Aluguel",
				dueDate: "2021-08-20",
				price: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should create expense", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				expenseName: "Aluguel",
				dueDate: "2021-08-20",
				price: 925
			});

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Despesa criada com sucesso");
	});
});