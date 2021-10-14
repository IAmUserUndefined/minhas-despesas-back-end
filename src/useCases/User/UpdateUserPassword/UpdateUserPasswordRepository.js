const UserModel = require("../../../database/models/Users");

module.exports = class UpdateUserPasswordRepository {

	async getPassword(id) {
		const { password } = await UserModel.findOne(
			{ _id: id }
		);
		return password;
	}

	async updatePassword(passwordNew, id) {

		await UserModel.updateOne(
			{ _id: id },
			{ password: passwordNew },
		);
	}
};