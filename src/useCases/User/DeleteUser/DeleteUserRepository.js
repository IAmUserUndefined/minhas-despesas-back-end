const UserModel = require("../../../database/models/Users");

module.exports = class DeleteUserRepository {

	async getPassword(id) {

		const { password } = await UserModel.findOne(
			{ _id: id }
		);
        
		return password;
	}

	async destroy(id) {
		await UserModel.deleteOne( { _id: id } );
	}
};