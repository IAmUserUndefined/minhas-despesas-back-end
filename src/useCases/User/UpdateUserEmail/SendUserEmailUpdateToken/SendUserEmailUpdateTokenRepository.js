const UserModel = require("../../../../database/models/Users");

module.exports = class SendUserEmailUpdateTokenRepository {

	async findByEmail(email) {
		const userEmail = await UserModel.findOne({
			email: email 
		});
        
		return userEmail;
	}

	async registerVerificationToken(id, verificationToken) {

		await UserModel.updateOne(
			{ _id: id },
			{ verificationToken: verificationToken },
		);
	}

	async registerVerificationTokenExpiryDate(id, verificationTokenExpiryTime) {

		await UserModel.updateOne(
			{ _id: id },
			{ verificationTokenExpiryDate: verificationTokenExpiryTime },
		);
	}
};