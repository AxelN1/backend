const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel