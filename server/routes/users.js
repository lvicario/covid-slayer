const express = require("express");

const router = express.Router();

const userData = [
    { _id: 1, name: "John Doe", age: 25 },
    { _id: 2, name: "Peter Lim", age: 30 },
    { _id: 3, name: "Mark Johnson", age: 32 },
];

router.get("/", async (req, res) => {
    res.send(userData);
});

module.exports = router;
