const Helper = require("../../utils/helper/Helper");
const mongoose = require("mongoose");

const database = async () => {
	await mongoose.connect(Helper.getMongoURLEnvironmentVariable());
};

database().catch(err => console.log(err));

module.exports = () => mongoose.connection.close();