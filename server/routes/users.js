const express = require("express");
const bcrypt = require("bcrypt");
const { User, validate } = require("./../models/user");

const router = express.Router();

const userData = [
    { _id: 1, name: "John Doe", age: 25 },
    { _id: 2, name: "Peter Lim", age: 30 },
    { _id: 3, name: "Mark Johnson", age: 32 },
];

router.get("/", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Email already registered...");

    user = new User({ ...req.body });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send(user);
});

module.exports = router;
