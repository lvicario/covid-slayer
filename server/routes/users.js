const express = require("express");
const bcrypt = require("bcrypt");
const { User, validate } = require("./../models/user");
const auth = require("./../middleware/auth");

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

    const token = user.generateAuthToken();

    res
        .header("x-auth-token", { accessToken: token })
        .send({
            _id: user._id,
            name: user.name,
            email: user.email
        });
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (!user) return res.status(404).send("The user that you want to delete cant be found.");

        res.send(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
