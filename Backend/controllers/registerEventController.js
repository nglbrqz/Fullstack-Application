const EventVolunteer = require('../models/eventVolunteers');

// Function to register a volunteer for an event
const registerVolunteer = async (req, res) => {
  try {
    const { eventId, name, age, email, contactNo, sex } = req.body;

    // Check if the eventId is provided
    if (!eventId) {
      return res.status(400).json({ message: 'Event ID is required' });
    }

    // Check if age is a valid number
    if (isNaN(age)) {
      return res.status(400).json({ message: 'Age must be a number' });
    }

    // Check if the volunteer already exists by email
    const existingVolunteer = await EventVolunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'Volunteer already registered' });
    }

    // Create a new volunteer registration
    const newVolunteer = new EventVolunteer({
      eventId,
      name,
      age,
      email,
      contactNo,
      sex
    });

    // Save the volunteer registration to the database
    await newVolunteer.save();

    res.status(201).json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    console.error('Error registering volunteer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to fetch all volunteer registrations for an event
const getAllVolunteersForEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Check if eventId is provided
    if (!eventId) {
      return res.status(400).json({ message: 'Event ID is required' });
    }

    // Find all volunteer registrations for the given event
    const volunteers = await EventVolunteer.find({ eventId });

    res.json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers for event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerVolunteer, getAllVolunteersForEvent };
