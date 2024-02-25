require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require("./db/db");
const route = require("./routes/index.js");

//Middleware setups
app.use(cors());
app.use(bodyParser.json());

//Connect to MongoDB
connectDb();

app.get("/", (req, res) => {
	res.send("Hello World");
})

app.use("/api", route);


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

