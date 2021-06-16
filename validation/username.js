const mongoose = require("mongoose")

const usernameSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    created: { type: Date, default: Date.now }
})

const username = mongoose.model("Hotel", usernameSchema)



module.exports = username