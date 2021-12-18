const { ok } = require("../../../adapters/adapterResponses/adapterResponses");
const DeleteExpenseRules = require("./DeleteExpenseRules");

module.exports = new class DeleteExpenseController {
    
	async handle(request){

		const { id } = request.params;

		const userId = request.userId;

		const deleteExpenseRules = new DeleteExpenseRules();

		const response = await deleteExpenseRules.execute(userId, id);

		return ok(response);
	}
};