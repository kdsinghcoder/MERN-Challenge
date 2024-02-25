const bookServices = require("../services/book");

const getBooks = async (req, res) => {
	try {
		const books = await bookServices.getBooks();
		res.status(200).json({ message: "Books fetched successfully", books });
	} catch (error) {
		res.status(400)
	}
};

const addBook = async (req, res) => {
	const { BookID, BookName, NumberOfCopies, AvailableCopies } = req.body;
	try {
		const book = await bookServices.addBook(BookID, BookName, NumberOfCopies, AvailableCopies);
		res.status(200).json({ message: "Book added successfully", book });
	} catch (error) {
		res.status(400).json({ message: "Book not added, something went wrong" })
	}
};

module.exports = { getBooks, addBook };