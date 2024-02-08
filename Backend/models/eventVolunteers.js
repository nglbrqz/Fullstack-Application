// SCHEMA MODEL FOR EVENT VOLUNTEERS
// FOLLOW SIMILAR MODEL FOR OTHER DATABASES

const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventVolunteerSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event', // Assuming the event model is named 'Event'
        required: true
    },
    name: String,
        sex: String,

    age: {
        type: Number,
        required: true // Make age required
    },
    email: {
        type: String,
        unique: true
    },
    contactNo: String
});

const eventVolunteer = mongoose.model('EventVolunteer', eventVolunteerSchema); // Correct model name

module.exports = eventVolunteer;
