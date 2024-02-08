//SCHEMA MODEL FOR VOLUNTEER
// FOLLOW SIMILAR MODEL FOR OTHER DATABASES

const mongoose = require("mongoose");
const { Schema } = mongoose;

const volunteerSchema = new Schema ({
    volunteerId: Number,
    name: String,
    age: Number,
    sex: String,
    email: {
        type:String,
        unique: true
    },
    contactNo: String
})

const volunteerModel = mongoose.model('Volunteer', volunteerSchema)

module.exports = volunteerModel