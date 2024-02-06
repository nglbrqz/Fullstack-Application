const connectgroupModel = require("../models/connectgroup");

async function connectgroup(req, res) {
  try {
    const { connectgroupId, name, age, email, contactNo } = req.body;

  //   console.log(connectgroupId, name, age, email, contactNo);

    if (!name || !age || !email || !contactNo ) {
      return res.json({
        error: "Please fill in all required fields.",
      });
    }

    // Create a new Connect group
    const newConnectgroup = await connectgroupModel.create({
      connectgroupId,
      name,
      age,
      email,
      contactNo
    });

    return res.json(newConnectgroup);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getConnectgroup(req, res) {
  try {
    // Fetch all connect group applicants from the database
    const connectgroup = await connectgroupModel.find();

    // Respond with the fetched connect group applicants
    res.json(connectgroup);
  } catch (error) {
    console.error("Error fetching Connect group applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteConnectgroup(req, res) {
  const requestId = req.params.id;

  try {
    // Find and delete the Connect group applicant with the given ID
    const deletedConnectgroup = await connectgroupModel.findByIdAndDelete(requestId);

    if (!deletedConnectgroup) {
      return res.status(404).json({ error: "Connect group applicant not found" });
    }

    res.json({ message: "Connect group applicant deleted successfully", deletedConnectgroup });
  } catch (error) {
    console.error("Error deleting Connect group applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
  connectgroup,
  getConnectgroup,
  deleteConnectgroup,
};