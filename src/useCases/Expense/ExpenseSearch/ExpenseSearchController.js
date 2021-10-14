const { ok } = require("../../../adapters/adapterResponses");
const ExpenseSearchRules = require("./ExpenseSearchRules");

module.exports = new class ExpenseSearchController {

	async handle(request){

		const { expenseSearch } = request.body;

		const userId = request.userId;

		const expenseSearchRules = new ExpenseSearchRules();

		const response = await expenseSearchRules.execute(userId, expenseSearch);

		return ok(response);
	}
};