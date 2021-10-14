const UserModel = require("../../../database/models/Users");

module.exports = class CreateUserRepository {

	async findByEmail(email) {
		const userEmail = await UserModel.findOne(
			{ email: email }
		);
		return userEmail;
	}

	async store(id, email, hash, token) {
		await UserModel.create({
			_id: id,
			email: email,
			password: hash,
			verificationToken: token
		});
	}
};