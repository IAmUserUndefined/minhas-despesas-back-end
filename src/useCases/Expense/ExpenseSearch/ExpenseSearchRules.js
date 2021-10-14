const { MissingParamError } = require("../../../utils/errors/index");

const { ExpenseRepository } = require("../../../repositories/Expense");

module.exports = class ExpenseSearchController {
	constructor() {
		this.repository = new ExpenseRepository();
	}

	async execute(userId, expenseName) {
		if (!expenseName)
			return new MissingParamError("Preencha o campo de pesquisa de despesa");

		return await this.repository.expenseSearch(userId, expenseName);
	}
};
