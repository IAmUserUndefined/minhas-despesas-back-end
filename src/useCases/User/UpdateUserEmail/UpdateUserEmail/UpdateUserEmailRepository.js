const UserModel = require("../../../../database/models/Users");

module.exports = class UpdateUserEmailRepository {

	async findByVerificationToken(id, verificationToken) {
		const userVerificationToken = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken

			});

		return userVerificationToken;
	}

	async registerVerificationTokenExpiryDate(id) {

		await UserModel.updateOne(
			{ _id: id },
			{ verificationTokenExpiryDate: 0 }
		);
	}

	async getVerificationTokenExpiryDate(id, verificationToken) {

		const tokenExpiryDate = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken
			});
		return tokenExpiryDate.verificationTokenExpiryDate;
	}

	async updateEmail(id, email) {
		await UserModel.updateOne(
			{ _id: id },
			{ email: email }
		);
	}
};