const { ok } = require("../../../adapters/adapterResponses/adapterResponses");
const GetExpenseRules = require("./GetExpenseRules");

module.exports = new class GetExpenseController {

	async handle(request){

		const userId = request.userId;

		const getExpenseRules = new GetExpenseRules();

		const response = await getExpenseRules.execute(userId);

		return ok(response);
	}
};