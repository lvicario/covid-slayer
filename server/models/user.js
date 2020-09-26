const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	}
});

userSchema.methods.generateAuthToken = function () {
	return jwt.sign({
		_id: this._id,
		name: this.name,
		email: this.email
	}, "jwtPrivateKey"); // needs to be in env variable
};

const User = mongoose.model("User", userSchema);

const validate = (user) => {
	const schema = Joi.object({
		name: Joi.string().required().min(5).max(50),
		email: Joi.string().required().min(5).max(50).email(),
		password: Joi.string().required().min(5).max(255)
	});

	return schema.validate(user);
};

module.exports = { User, validate };
