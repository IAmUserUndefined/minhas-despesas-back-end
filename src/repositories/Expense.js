const closeMongoConnection = require("../database/mongodb/index");
const UserModel = require("../database/models/User");
const ExpenseModel = require("../database/models/expense");

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

	async expenseSearch(userId, expenseName) {
		const searchExpense = await ExpenseModel.find(
			{
				userId: userId,
				expenseName: { $regex: `.*${expenseName}.*` }
			}
		).sort({ dueDate: 1 });

		return searchExpense;
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

class ExpenseTestRepository {

	async createTestTaskAndUser() {
		await UserModel.create({
			_id: "ll98bc1b-22f4-4fc6-be64-3d830068bddc",
			email: "joao@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verifiedEmail: true
		});

		await ExpenseModel.create({
			_id: "ll98bc1b-22f4-4fc6-be64-3d830068bdaa",
			userId: "ll98bc1b-22f4-4fc6-be64-3d830068bddc",
			expenseName: "Luz",
			dueDate: "2022-08-15",
			price: 150
		});
	}

	async deleteTestTaskAndUser(){
		await ExpenseModel.deleteMany();
		await UserModel.deleteMany();
		closeMongoConnection();
	}
}

module.exports = {
	ExpenseRepository,
	ExpenseTestRepository
};