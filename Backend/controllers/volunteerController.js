const volunteerModel = require("../models/volunteer");
// const { hashString } = require("../helper/iphash");

async function volunteer(req, res) {
    try {
      const { volunteerId, name, age, sex, email, contactNo } = req.body;
  
    //   console.log(volunteerId, name, age, sex, email, contactNo);

      if (!name || !age || !sex || !email || !contactNo ) {
        return res.json({
          error: "Please fill in all required fields.",
        });
      }
  
      // Create a new prayer request with the hashed IP
      const newVolunteer = await volunteerModel.create({
        volunteerId,
        name,
        age,
        sex,
        email,
        contactNo
      });
  
      return res.json(newVolunteer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  module.exports = {
    volunteer
  };