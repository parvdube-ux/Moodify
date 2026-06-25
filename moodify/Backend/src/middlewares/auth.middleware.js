const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function authUser(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const blacklisted = await redis.get(token);
    if (blacklisted) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = authUser;