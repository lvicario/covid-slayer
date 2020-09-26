const mongoose = require("mongoose");
const Joi = require("joi");

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
