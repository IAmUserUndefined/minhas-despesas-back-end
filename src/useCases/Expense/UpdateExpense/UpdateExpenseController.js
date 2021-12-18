const { ok } = require("../../../adapters/adapterResponses/adapterResponses");
const UpdateExpenseRules = require("./UpdateExpenseRules");

module.exports = new class UpdateExpenseController {

	async handle(request){

		const { expenseName, dueDate, price } = request.body;
        
		const { id } = request.params;

		const userId = request.userId;

		const updateExpenseRules = new UpdateExpenseRules();

		const response = await updateExpenseRules.execute(userId, id, expenseName, dueDate, price);

		return ok(response);
	}
};