require("../../../database/mongodb/index");

const UserModel = require("../../../database/models/user");

class UserRepository {

	async create(id, email, hash, token) {
		await UserModel.create({
			_id: id,
			email: email,
			password: hash,
			verificationToken: token,
			verificationTokenExpiryDate: 0
		});
	}

	async verifyEmail(email, token) {
		await UserModel.updateOne({
			email: email,
			verificationToken: token
		},

		{ verifiedEmail: true }
		);
	}

	async delete(id) {
		await UserModel.deleteOne( { _id: id } );
	}

	async findEmailById(id) {
		const userEmail = await UserModel.findOne(
			{ _id: id }
		);
		return userEmail;
	}

	async findEmailByEmail(email) {
		const userEmail = await UserModel.findOne(
			{ email: email }
		);
		return userEmail;
	}

	async findByEmailVerified(email) {
		const userEmail = await UserModel.findOne({
			email: email,
			verifiedEmail: true
		});

		return userEmail;
	}

	async getId(email) {
		const { _id } = await UserModel.findOne(
			{
				email: email
			});

		return _id;

	}

	async getPasswordById(id) {
		const { password } = await UserModel.findOne({
			_id: id
		});

		return password;
	}

	async getPasswordByEmail(email) {
		const { password } = await UserModel.findOne({
			email: email
		});

		return password;
	}

	async findVerficationTokenById(id, verificationToken) {
		const userVerificationToken = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken
			});

		return userVerificationToken;
	}

	async findVerificationTokenByEmail(email, verificationToken) {
		const userVerificationToken = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			});

		return userVerificationToken;
	}

	async updateVerificationTokenById(id, verificationToken) {
		await UserModel.updateOne(
			{ _id: id },
			{ verificationToken: verificationToken }
		);
	}

	async updateVerificationTokenByEmail(email, verificationToken) {
		await UserModel.updateOne(
			{ email: email },
			{ verificationToken: verificationToken }
		);
	}

	async getVerficationTokenExpiryDateById(id, verificationToken) {
		const { verificationTokenExpiryDate } = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken
			});

		return verificationTokenExpiryDate;
	}

	async getVerificationTokenExpiryDateByEmail(email, verificationToken) {
		const { verificationTokenExpiryDate } = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			});

		return verificationTokenExpiryDate;
	}
    
	async updateVerificationTokenExpiryDateById(id, verificationTokenExpiryDate) {
		await UserModel.updateOne(
			{ _id: id },
			{ verificationTokenExpiryDate: verificationTokenExpiryDate }
		);
	}

	async updateVerificationTokenExpiryDateByEmail(email, verificationTokenExpiryDate) {
		await UserModel.updateOne(
			{ email: email },
			{ verificationTokenExpiryDate: verificationTokenExpiryDate }
		);
	}

	async updateEmail(id, email) {
		await UserModel.updateOne(
			{ _id: id },
			{ email: email }
		);
	}

	async updatePasswordById(id, passwordNew) {
		await UserModel.updateOne(
			{ _id: id },
			{ password: passwordNew },
		);
	}
    
	async updatePasswordByEmail(email, passwordNew) {
		await UserModel.updateOne(
			{ email: email },
			{ password: passwordNew },
		);
	}
}

module.exports = {
	UserRepository
};