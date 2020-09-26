const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();

mongoose.connect("mongodb://localhost/covid-slayer", { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log(`Connected to MongoDb...`))

app.use(cors());
app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
