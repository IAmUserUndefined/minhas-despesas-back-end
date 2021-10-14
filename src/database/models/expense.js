const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema({

	_id: {
		type: String,
		require: true
	},

	expenseName: {
		type: String,
		require: true
	},

	dueDate: {
		type: Date,
		require: true
	},

	userId: {
		type: String,
		ref: "User",
		require: true
	},

	price: {
		type: Number,
		require: true
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

mongoose.model("expenses", ExpenseSchema);

const Expense = mongoose.model("expenses");

module.exports = Expense;