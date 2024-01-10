const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const router = require("./routes/route");
const connect = require('./config/database')

app.use(express.json());
app.use(cors());
app.use(router);
connect()

const { PORT } = process.env;


app.listen(PORT, () => {
	console.info(`Server listening is on PORT ${PORT}`);
});
