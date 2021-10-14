const { MissingParamError } = require("../../../utils/errors/index");

const { ExpenseRepository } = require("../../../repositories/Expense");

module.exports = class UpdateExpenseRules {
	constructor() {
		this.repository = new ExpenseRepository();
	}

	async execute(userId, id, expenseName, dueDate, price) {
		if (!expenseName || !dueDate || !price || !id)
			return new MissingParamError("Preencha todos os campos");

		await this.repository.update(userId, id, expenseName, dueDate, price);

		return "Despesa atualizada com sucesso";
	}
};
