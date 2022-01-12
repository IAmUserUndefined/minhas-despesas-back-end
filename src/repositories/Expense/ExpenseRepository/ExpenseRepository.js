require("../../../database/mongodb/index");

const ExpenseModel = require("../../../database/models/expense");

class ExpenseRepository {

	async create(userId, id, expenseName, dueDate, price) {
		await ExpenseModel.create({
			_id: id,
			userId: userId,
			expenseName: expenseName,
			dueDate: dueDate,
			price: price
		});
	}

	async delete(userId, id) {
		await ExpenseModel.deleteOne({
			_id: id,
			userId: userId
		});
	}

	async getExpenses(userId) {
		const expenses = await ExpenseModel.find({
			userId: userId
		}).sort({ dueDate: 1 });

		return expenses;
	}

	async update(userId, id, expenseName, dueDate, price) {
		await ExpenseModel.updateOne(

			{
				_id: id,
				userId: userId
			},

			{
				expenseName: expenseName,
				dueDate: dueDate,
				price: price
			},

		);
	}
}

module.exports = {
	ExpenseRepository
};