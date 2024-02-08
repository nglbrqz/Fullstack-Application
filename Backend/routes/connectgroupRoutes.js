const express = require("express");
const router = express.Router();
const cors = require("cors");

const { connectgroup, getConnectgroup, deleteConnectgroup } = require("../controllers/connectgroupController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

router.post("/addconnectgroup", connectgroup);
router.get("/getconnectgroup", getConnectgroup);
router.delete("/deleteconnectgroup/:id", deleteConnectgroup);
module.exports = router;
