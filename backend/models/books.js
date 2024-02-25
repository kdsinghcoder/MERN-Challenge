const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	BookID: {
		type: Number,
		required: true,
		unique: true
	},
	BookName: {
		type: String,
		required: true,
	},
	NumberOfCopies: {
		type: Number,
		required: true,
	},
	AvailableCopies: {
		type: Number,
		required: true,
	},
}, { timestamps: true });

const bookModel = mongoose.model("bookModel", bookSchema);

module.exports = bookModel;