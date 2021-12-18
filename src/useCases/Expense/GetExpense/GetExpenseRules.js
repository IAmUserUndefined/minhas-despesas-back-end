const { ExpenseRepository } = require("../../../repositories/Expense/ExpenseRepository/ExpenseRepository");

module.exports = class GetExpenseRules {
	constructor() {
		this.repository = new ExpenseRepository();
	}

	async execute(userId) {
		return await this.repository.getExpenses(userId);
	}
};
