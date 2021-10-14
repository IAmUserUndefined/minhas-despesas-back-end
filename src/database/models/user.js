const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

	_id: {
		type: String,
		require: true
	},

	email: {
		type: String,
		require: true
	},

	password: {
		type: String,
		require: true
	},

	verificationToken: {
		type: String,
		require: true
	},

	verificationTokenExpiryDate: {
		type: Date,
		require: false
	},

	verifiedEmail: {
		type: Boolean,
		require: false
	},

	createdAt: {
		type: Date,
		require: false
	},

	updatedAt: {
		type: Date,
		require: false
	}
});

mongoose.model("users", UserSchema);

const Expense = mongoose.model("users");

module.exports = Expense;