const { MissingParamError } = require("../../../utils/errors/index");

const Helper = require("../../../utils/helper/Helper");
const { ExpenseRepository } = require("../../../repositories/Expense/ExpenseRepository/ExpenseRepository");

module.exports = class CreateExpenseRules {
    
	constructor(){
		this.repository = new ExpenseRepository();
	}

	async execute(userId, expenseName, dueDate, price){

		if(!expenseName || !dueDate || !price)
			return new MissingParamError("Preencha todos os campos");

		await this.repository.create(userId, Helper.createId(), expenseName, dueDate, price);

		return "Despesa criada com sucesso";
	}
};