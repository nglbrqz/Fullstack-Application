//SCHEMA MODEL FOR ADMIN
// FOLLOW SIMILAR MODEL FOR OTHER DATABASES

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: String,
    email: {
        type:String,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel