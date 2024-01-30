const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  eventStartTime: {  // Updated field name
    type: String,
    required: true,
  },
  eventEndTime: {  // Updated field name
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
});

eventSchema.pre('save', function (next) {
  // Set updatedAt timestamp before saving if the document is being modified
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
