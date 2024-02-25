const userModel = require("../models/user.js");

const findUser = async (userDetails) => {
	try {
		const user = await userModel.findOne(userDetails, { new: true });
		return user;
	} catch (error) {
		console.log(error);
	}
}

const createUser = async (userDetails) => {
	try {
		const user = new userModel(userDetails);
		user.save();
		return user;
	} catch (error) {
		console.log(error);
	}
}

module.exports = { findUser, createUser }