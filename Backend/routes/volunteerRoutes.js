const express = require("express");
const router = express.Router();
const cors = require("cors");

const { volunteer } = require("../controllers/volunteerController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

router.post("/addvolunteer", volunteer);
// router.get("/getvolunteer", getvolunteer);
// router.delete("/deletevolunteer/:id", deletevolunteer);
module.exports = router;
