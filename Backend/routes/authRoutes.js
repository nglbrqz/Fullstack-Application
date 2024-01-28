const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Don't forget to import jwt
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");
const { prayerRequest } = require("../controllers/prayerReqController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const isAuthenticatedMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Use the secret key from the environment variable
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    return res.status(500).json({ error: "JWT secret key not configured" });
  }

  jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.userId = decoded.userId;
    next();
  });
};

// ROUTES
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/prayerreq", prayerRequest);

// Use isAuthenticatedMiddleware for authentication
router.get("/dashboard", isAuthenticatedMiddleware, (req, res) => {});

module.exports = router;
