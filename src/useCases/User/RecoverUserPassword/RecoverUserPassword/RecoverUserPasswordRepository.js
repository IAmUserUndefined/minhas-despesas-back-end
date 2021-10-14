const UserModel = require("../../../../database/models/Users");

module.exports = class RecoverUserPasswordRepository {

	async findByVerificationToken(email, verificationToken) {

		const userVerificationToken = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			});

		return userVerificationToken;
	}

	async registerVerificationTokenExpiryDate(email) {

		await UserModel.updateOne(
			{ email: email },
			{ verificationTokenExpiryDate: 0 },
		);
	}

	async getPassword(email) {
		const { password } = await UserModel.findOne({
			email: email
		});
		return password;
	}

	async getVerificationTokenExpiryDate(email, verificationToken) {

		const { verificationTokenExpiryDate } = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			});

		return verificationTokenExpiryDate;
	}

	async updatePassword(email, newPassword) {
		await UserModel.updateOne(
			{ email: email },
			{ password: newPassword }
		);
	}
};