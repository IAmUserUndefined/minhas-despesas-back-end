const { ExpenseRepository } = require("../../../repositories/Expense/ExpenseRepository/ExpenseRepository");

module.exports = class DeleteExpenseRules {
	constructor() {
		this.repository = new ExpenseRepository();
	}

	async execute(userId, id) {
		await this.repository.delete(userId, id);

		return "Despesa deletada com sucesso";
	}
};
