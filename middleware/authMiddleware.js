const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Jwt Token miidleware
const authMiddleware = async(req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    token = token.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET.trim());
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;