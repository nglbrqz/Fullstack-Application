const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const {
  test,
  registerUser,
  loginUser,
  isAuthenticatedMiddleware,
} = require("../controllers/authController");
const { prayerRequest } = require("../controllers/prayerReqController");

const secretKey = process.env.JWT_SECRET;

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// ROUTES
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/prayerreq", prayerRequest);

router.get("/dashboard", isAuthenticatedMiddleware, (req, res) => {
  const { name, email } = req.user; // Get user information from req.user
  res.json({ name, email });
});

module.exports = router;
