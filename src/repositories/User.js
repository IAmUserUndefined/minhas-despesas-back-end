const closeMongoConnection = require("../database/mongodb/index");
const UserModel = require("../database/models/user");

class UserRepository {

	async create(id, email, hash, token) {
		await UserModel.create({
			_id: id,
			email: email,
			password: hash,
			verificationToken: token
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

class UserTestRepository {

	async createTestUsers(){

		await UserModel.create({
			_id: "aa98bc1b-22f4-4fc6-be64-3d830068bddc",
			email: "joao@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verifiedEmail: true,
			verificationTokenExpiryDate: 16333909805121
		});
	
		await UserModel.create({
			_id: "ff98bc1b-22f4-4fc6-be64-3d830068bzaa",
			email: "joao1000@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verificationToken: "216d685d384626d9a575629dc38e88",
			verifiedEmail: false
		});

		await UserModel.create({
			_id: "fe98bc1b-22f4-4fc6-be64-3d830068bddd",
			email: "joao5000@teste.com",
			name: "João Pedro",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verifiedEmail: true,
			verificationTokenExpiryDate: 0
		});

	}

	async deleteTestUsers(){
		await UserModel.deleteMany();
		closeMongoConnection();
	}
}

module.exports = {
	UserRepository,
	UserTestRepository
};