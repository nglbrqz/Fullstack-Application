const mongoose = require("mongoose");
const { Schema } = mongoose;

// Import the event volunteer model
const EventVolunteer = require("./eventVolunteers");

const eventSchema = new Schema({
  eventThumbnailImageUrl: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value > Date.now();
      },
      message: "Event date must be in the future",
    },
  },
  eventStartTime: {
    type: String,
    required: true,
  },
  eventEndTime: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    enum: ["church", "outreach"],
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventHost: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  isEventArchived: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },

  // Reference the EventVolunteer model
  volunteers: [{ type: Schema.Types.ObjectId, ref: 'eventVolunteers' }]
});

eventSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
