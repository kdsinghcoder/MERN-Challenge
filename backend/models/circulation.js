const mongoose = require('mongoose');


const circulationSchema = new mongoose.Schema({
	eventType: {
		type: "Return" | "Checkout",
		required: true,
	},
	bookObjId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "bookModel",
	},
	BookID: {
		type: Number,
		required: true,
	},
	memberObjId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "memberModel",
	},
	MemberID: {
		type: Number,
		required: true,
	},
}
	, {
		timestamps: true
	});

const circulationModel = mongoose.model("circulationModel", circulationSchema);

module.exports = circulationModel;