const UserModel = require("../../../database/models/Users");

module.exports = class VerifyEmailUserRepository {

	async findByEmailVerified(email) {

		const userEmail = await UserModel.findOne({
			email: email,
			verifiedEmail: true
		});

		return userEmail;
	}

	async findByVerificationToken(email, verificationToken) {

		const userVerificationToken = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			});

		return userVerificationToken;
	}

	async verifyEmail(email, verificationToken) {

		await UserModel.updateOne({
			email: email,
			verificationToken: verificationToken
		},

		{
			verifiedEmail: true
		}
		);
	}
};