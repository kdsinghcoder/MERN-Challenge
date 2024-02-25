const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

// Connect to MongoDB
const connectDb = async () => {
	try {
		await mongoose.connect(mongoUri, {
		});
	} catch (error) {
		console.log('Error connecting to the database. Exiting now...', error);
		process.exit();
	}
}

module.exports = connectDb;