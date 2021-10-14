const { ExpenseRepository } = require("../../../repositories/Expense");

module.exports = class GetExpenseRules {
	constructor() {
		this.repository = new ExpenseRepository();
	}

	async execute(userId) {
		return await this.repository.getExpenses(userId);
	}
};
