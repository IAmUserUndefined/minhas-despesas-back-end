const UserModel = require("../../../database/models/Users");

module.exports = class UserLoginRepository {

	async findByEmail(email) {
		const userEmail = await UserModel.findOne({
			email: email
		});
		return userEmail;
	}

	async findByVerifiedEmail(email) {

		const verifiedEmail = await UserModel.findOne(
			{
				email: email,
				verifiedEmail: true
			});

		return verifiedEmail;
	}

	async getPassword(email) {
        
		const { password } = await UserModel.findOne({
			email: email
		});

		return password;
	}

	async getId(email) {
		const { _id } = await UserModel.findOne(
			{
				email: email
			});

		return _id;

	}
};