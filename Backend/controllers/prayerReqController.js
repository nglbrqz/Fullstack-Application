const prayerRequestModel = require("../models/prayerreq");
const { hashString } = require("../helper/iphash");

async function prayerRequest(req, res) {
  try {
    const { name, date, prayerText } = req.body;

    if (!name || !date || !prayerText) {
      return res.json({
        error: "Name, Date, and Textbox are required",
      });
    }

    // Get the user's IP address
    const userIP = req.ip;

    // Hash the user's IP address before sending to the database
    const hashedIP = hashString(userIP);

    // Check if the user has made a prayer request in the last 5 minutes
    const lastPrayerRequest = await prayerRequestModel.findOne({
      userIPHash: hashedIP,
      createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) },
    });

    if (lastPrayerRequest) {
      return res.json({
        error: "You can make only one prayer request every 5 minutes",
      });
    }

    // Create a new prayer request with the hashed IP
    const newPrayerReq = await prayerRequestModel.create({
      userIPHash: hashedIP,
      name,
      date,
      prayerText,
    });

    return res.json(newPrayerReq);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getPrayerRequests(req, res) {
  try {
    // Fetch all prayer requests from the database
    const prayerRequests = await prayerRequestModel.find();

    // Respond with the fetched prayer requests
    res.json(prayerRequests);
  } catch (error) {
    console.error("Error fetching prayer requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function markPrayerRequestAsRead(req, res) {
  const requestId = req.params.id;

  try {
    const updatedRequest = await prayerRequestModel.findByIdAndUpdate(
      requestId,
      { $set: { readStatus: true } },
      { new: true }
    );

    res.json(updatedRequest);
  } catch (error) {
    console.error("Error marking prayer request as read:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deletePrayerRequest(req, res) {
  const requestId = req.params.id;

  try {
    // Find and delete the prayer request with the given ID
    const deletedRequest = await prayerRequestModel.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res.status(404).json({ error: "Prayer request not found" });
    }

    res.json({ message: "Prayer request deleted successfully", deletedRequest });
  } catch (error) {
    console.error("Error deleting prayer request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  prayerRequest,
  markPrayerRequestAsRead,
  getPrayerRequests,
  deletePrayerRequest,
};
