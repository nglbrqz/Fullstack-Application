const crypto = require('crypto');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PrayerReqSchema = new Schema({
  userIPHash: String,
  userIP: String,
  name: String,
  date: Date,
  prayerText: String,
}, { timestamps: true });

PrayerReqSchema.pre('save', function (next) {
  // Check if the user's IP is available before hashing
  if (this.userIP) {
    // Convert the user's IP address to a string before hashing
    const ipString = String(this.userIP);
    // Hash the user's IP address before saving
    const hashedIP = crypto.createHash('sha256').update(ipString).digest('hex');
    this.userIPHash = hashedIP;
  }
  next();
});

const PrayerReqModel = mongoose.model('PrayerReq', PrayerReqSchema);

module.exports = PrayerReqModel;
