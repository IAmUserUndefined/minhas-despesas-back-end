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
		}).catch(err => console.log(err));
	}

	async verifyEmail(email, token) {
		await UserModel.updateOne({
			email: email,
			verificationToken: token
		},

		{ verifiedEmail: true }
		).catch(err => console.log(err));
	}

	async delete(id) {
		await UserModel.deleteOne( { _id: id } );
	}

	async findEmailById(id) {
		const userEmail = await UserModel.findOne(
			{ _id: id }
		).catch(err => console.log(err));
		return userEmail;
	}

	async findEmailByEmail(email) {
		const userEmail = await UserModel.findOne(
			{ email: email }
		).catch(err => console.log(err));
		return userEmail;
	}

	async findByEmailVerified(email) {
		const userEmail = await UserModel.findOne({
			email: email,
			verifiedEmail: true
		}).catch(err => console.log(err));

		return userEmail;
	}

	async getId(email) {
		const { _id } = await UserModel.findOne(
			{
				email: email
			}).catch(err => console.log(err));

		return _id;

	}

	async getPasswordById(id) {
		const { password } = await UserModel.findOne({
			_id: id
		}).catch(err => console.log(err));

		return password;
	}

	async getPasswordByEmail(email) {
		const { password } = await UserModel.findOne({
			email: email
		}).catch(err => console.log(err));

		return password;
	}

	async findVerficationTokenById(id, verificationToken) {
		const userVerificationToken = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken
			}).catch(err => console.log(err));

		return userVerificationToken;
	}

	async findVerificationTokenByEmail(email, verificationToken) {
		const userVerificationToken = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			}).catch(err => console.log(err));

		return userVerificationToken;
	}

	async updateVerificationTokenById(id, verificationToken) {
		await UserModel.updateOne(
			{ _id: id },
			{ verificationToken: verificationToken }
		).catch(err => console.log(err));
	}

	async updateVerificationTokenByEmail(email, verificationToken) {
		await UserModel.updateOne(
			{ email: email },
			{ verificationToken: verificationToken }
		).catch(err => console.log(err));
	}

	async getVerficationTokenExpiryDateById(id, verificationToken) {
		const { verificationTokenExpiryDate } = await UserModel.findOne(
			{
				_id: id,
				verificationToken: verificationToken
			}).catch(err => console.log(err));

		return verificationTokenExpiryDate;
	}

	async getVerificationTokenExpiryDateByEmail(email, verificationToken) {
		const { verificationTokenExpiryDate } = await UserModel.findOne(
			{
				email: email,
				verificationToken: verificationToken
			}).catch(err => console.log(err));

		return verificationTokenExpiryDate;
	}
    
	async updateVerificationTokenExpiryDateById(id, verificationTokenExpiryDate) {
		await UserModel.updateOne(
			{ _id: id },
			{ verificationTokenExpiryDate: verificationTokenExpiryDate }
		).catch(err => console.log(err));
	}

	async updateVerificationTokenExpiryDateByEmail(email, verificationTokenExpiryDate) {
		await UserModel.updateOne(
			{ email: email },
			{ verificationTokenExpiryDate: verificationTokenExpiryDate }
		).catch(err => console.log(err));
	}

	async updateEmail(id, email) {
		await UserModel.updateOne(
			{ _id: id },
			{ email: email }
		).catch(err => console.log(err));
	}

	async updatePasswordById(id, passwordNew) {
		await UserModel.updateOne(
			{ _id: id },
			{ password: passwordNew },
		).catch(err => console.log(err));
	}
    
	async updatePasswordByEmail(email, passwordNew) {
		await UserModel.updateOne(
			{ email: email },
			{ password: passwordNew },
		).catch(err => console.log(err));
	}
}

module.exports = {
	UserRepository
};