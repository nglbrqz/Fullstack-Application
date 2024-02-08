//SCHEMA MODEL FOR CONNECT GROUP
// FOLLOW SIMILAR MODEL FOR OTHER DATABASES

const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectgroupSchema = new Schema ({
    connectgroupId: String,
    name: String,
    age: Number,
    email: {
        type:String,
        unique: true
    },
    contactNo: String
})

const connectgroupModel = mongoose.model('Connectgroup', connectgroupSchema)

module.exports = connectgroupModel