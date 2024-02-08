const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  test,
  registerUser,
  loginUser,
  isAuthenticatedMiddleware,logoutUser, validateToken
} = require("../controllers/authController");

  
// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", isAuthenticatedMiddleware, (req, res) => {
  const { name, email } = req.user;  
  res.json({ name, email });
});
router.get("/validate-token", validateToken); // Add route for validateToken function
router.post("/logout", logoutUser); 
module.exports = router;