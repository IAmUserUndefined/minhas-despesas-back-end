const closeMongoConnection = require("../../../database/mongodb/index");
const UserModel = require("../../../database/models/user");
const ExpenseModel = require("../../../database/models/expense");

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
	ExpenseTestRepository
};