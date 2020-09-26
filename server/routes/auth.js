const express = require("express");
const Joi = require("joi");
const { User } = require("./../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   const user = await User.find({
       email: req.body.email,
       password: req.body.password
   });

   if (!user || user.length < 1) return res.status(400).send(`Email and/or password doesn't match in the database...`);

   res.send({isAuthenticated: true, user});
});

const validate = (data) => {
   const schema = Joi.object({
       email: Joi.string().required(),
       password: Joi.string().required()
   });

    return schema.validate(data);
};

module.exports = router;
