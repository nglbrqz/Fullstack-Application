const express = require("express");
const router = express.Router();
const cors = require("cors");

const { prayerRequest, getPrayerRequests, markPrayerRequestAsRead, deletePrayerRequest,} = require("../controllers/prayerReqController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

router.post("/addprayerreq", prayerRequest);
router.get("/getprayerreq", getPrayerRequests);
router.post("/markprayerreq/:id", markPrayerRequestAsRead);
router.delete("/deleteprayerreq/:id", deletePrayerRequest);
module.exports = router;
