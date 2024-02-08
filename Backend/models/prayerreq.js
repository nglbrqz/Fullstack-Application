const crypto = require('crypto');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PrayerReqSchema = new Schema({
  userIPHash: String,
  userIP: String,
  name: String,
  date: Date,
  prayerText: String,
  readStatus: { type: Boolean, default: false }, // Default value is set to false (unread)
}, { timestamps: true });

PrayerReqSchema.pre('save', function (next) {
   if (this.userIP) {
     const ipString = String(this.userIP);
     const hashedIP = crypto.createHash('sha256').update(ipString).digest('hex');
    this.userIPHash = hashedIP;
  }
  next();
});

const PrayerReqModel = mongoose.model('PrayerReq', PrayerReqSchema);

module.exports = PrayerReqModel;
