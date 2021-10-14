const UserModel = require("../../../../database/models/Users");

module.exports = class SendUserPasswordRecoveryTokenRepository {

	async findByEmail(email) {
		const userEmail = await UserModel.findOne({
			email: email
		});
		return userEmail;
	}

	async registerVerificationToken(email, verificationToken) {

		await UserModel.updateOne(
			{ email: email },
			{ verificationToken: verificationToken }
		);
	}

	async registerVerificationTokenExpiryDate(email, verificationTokenExpiryTime) {

		await UserModel.updateOne(
			{ email: email },
			{ verificationTokenExpiryDate: verificationTokenExpiryTime }
		);
	}
};