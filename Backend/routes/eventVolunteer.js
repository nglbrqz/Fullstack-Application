const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
    registerVolunteer, getAllVolunteersForEvent, deleteVolunteer
} = require("../controllers/registerEventController")

router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );
 
router.post("/registervolunteer", registerVolunteer);
 router.get("/volunteers/:eventId", getAllVolunteersForEvent);
 router.delete("/deleteEventVolunteer/:id", deleteVolunteer);
  
module.exports = router;
