const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("./../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   let user = await User.findOne({ email: req.body.email });
   if (!user) return res.status(400).send("Invalid email/password.");

   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if (!validPassword) return res.status(400).send("Invalid email/password.");

   const token = user.generateAuthToken();

   res.send({ accessToken: token });
});

const validate = (data) => {
   const schema = Joi.object({
       email: Joi.string().required(),
       password: Joi.string().required()
   });

    return schema.validate(data);
};

module.exports = router;
