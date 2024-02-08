const express = require("express");
const router = express.Router();
const cors = require("cors");

const { volunteer, getVolunteer, deleteVolunteer } = require("../controllers/volunteerController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

router.post("/addvolunteer", volunteer);
router.get("/getvolunteer", getVolunteer);
router.delete("/deletevolunteer/:id", deleteVolunteer);
module.exports = router;
