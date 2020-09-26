const express = require("express");
const users = require("./routes/users");

const app = express();

app.use("/api/users", users);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
