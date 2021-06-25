const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory: Number,
    created: { type: Date, default: Date.now }
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = restaurant