/* eslint-disable no-undef */

jest.setTimeout(20000);

const { UserRepository } = require("../../User/UserRepository/UserRepository");
const { ExpenseRepository } = require("./ExpenseRepository");

describe(("Test of task repository"), () => {

	beforeAll(async () => {
		const repository = new UserRepository();
		await repository.create("1", "email@teste.com", "Teste123", "abc-123-456");
	});

	afterAll(async () => {
		const repository = new UserRepository();
		await repository.delete("1");
	});

	test("Should create expense", async () => {
		const repository = new ExpenseRepository();
		await repository.create("1", "1", "Conta de luz", "2022-05-06", 300);
	});

	test("Should get expense", async () => {
		const repository = new ExpenseRepository();
		const expenses = await repository.getExpenses("1", "1");
		expect(expenses[0]._id).not.toBeUndefined();
		expect(expenses[0].expenseName).not.toBeUndefined();
		expect(expenses[0].dueDate).not.toBeUndefined();
		expect(expenses[0].price).not.toBeUndefined();
	});

	test("Should search expense", async () => {
		const repository = new ExpenseRepository();
		const expenses = await repository.expenseSearch("1", "Conta de luz");
		expect(expenses[0]._id).not.toBeUndefined();
		expect(expenses[0].expenseName).not.toBeUndefined();
		expect(expenses[0].dueDate).not.toBeUndefined();
		expect(expenses[0].price).not.toBeUndefined();
	});

	test("Should update expense", async () => {
		const repository = new ExpenseRepository();
		await repository.update("1", "1", "Conta de Água", "2022-05-06", 100);
	});

	test("Should remove expense", async () => {
		const repository = new ExpenseRepository();
		await repository.delete("1", "1");
	});
});