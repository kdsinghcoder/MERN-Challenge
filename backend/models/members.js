const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
	MemberID: {
		type: Number,
		required: true,
		unique: true
	},
	MemberName: {
		type: String,
		required: true,
	},

}, { timestamps: true });


const memberModel = mongoose.model("memberModel", memberSchema);

module.exports = memberModel;