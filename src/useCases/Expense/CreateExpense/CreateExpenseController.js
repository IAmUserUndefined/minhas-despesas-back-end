const { ok } = require("../../../adapters/adapterResponses");
const CreateExpenseRules = require("./CreateExpenseRules");

module.exports = new class CreateExpenseController {

	async handle(request){

		const { expenseName, dueDate, price } = request.body;

		const userId = request.userId;

		const createExpenseRules = new CreateExpenseRules();

		const response = await createExpenseRules.execute(userId, expenseName, dueDate, price);

		return ok(response);
	}
};