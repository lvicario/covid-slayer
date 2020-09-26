const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.headers["x-auth-token"];
	if (!token) res.status(401).send("Access denied, no token provided.");

	try {
		const decoded = jwt.verify(token, "jwtPrivateKey");
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(400).send(err.message);
	}
}
