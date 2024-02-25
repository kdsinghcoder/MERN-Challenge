const bookModel = require("../models/books");

const getBooks = async (input) => {
	const books = await bookModel.find(input);
	return books;
}

const addBook = async (BookID, BookName, NumberOfCopies, AvailableCopies) => {
	const book = new bookModel({ BookID, BookName, NumberOfCopies, AvailableCopies });
	await book.save();
	return book;
}
module.exports = { getBooks, addBook };