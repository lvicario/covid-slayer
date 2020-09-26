const express = require("express");
const users = require("./routes/users");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/covid-slayer", { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log(`Connected to MongoDb...`))

app.use(express.json());
app.use("/api/users", users);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
