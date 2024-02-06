const volunteerModel = require("../models/volunteer");

async function volunteer(req, res) {
  try {
    const { volunteerId, name, age, sex, email, contactNo } = req.body;

  //   console.log(volunteerId, name, age, sex, email, contactNo);

    if (!name || !age || !sex || !email || !contactNo ) {
      return res.json({
        error: "Please fill in all required fields.",
      });
    }

    // Create a new volunteer
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

async function getVolunteer(req, res) {
  try {
    // Fetch all volunteers from the database
    const volunteer = await volunteerModel.find();

    // Respond with the fetched volunteers
    res.json(volunteer);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteVolunteer(req, res) {
  const requestId = req.params.id;

  try {
    // Find and delete the volunteer with the given ID
    const deletedVolunteer = await volunteerModel.findByIdAndDelete(requestId);

    if (!deletedVolunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    res.json({ message: "Volunteer deleted successfully", deletedVolunteer });
  } catch (error) {
    console.error("Error deleting Volunteer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
  volunteer,
  getVolunteer,
  deleteVolunteer,
};