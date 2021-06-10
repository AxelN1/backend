const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const hotelSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: { type: Number, min: 1, max: 5 },
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: { type: Number, min: 1, max: 3 },
    created: { type: Date, default: Date.now }
})

const Hotel = new mongoose.model("Hotel", hotelSchema)

Hotel.insertMany({
    name: "HBC",
    address: "12 rue Passy,16éme",
    city: "Paris",
    country: "France",
    stars: 6,
    hasSpa: true,
    hasPool: true,
    priceCategory: 200,
})

const restaurantSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: { type: Number, min: 1, max: 5 },
    cuisine: String,
    priceCategory: { type: Number, min: 1, max: 3 },
    created: { type: Date, default: Date.now }
})

const Restaurant = new mongoose.model("Restaurant", restaurantSchema)

Restaurant.insertMany({

})

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (err) {
        console.error(err)
    }
})

app.get("/hotels/:id", async (req, res) => {
    try {
        const hotelId = req.params.id
    } catch (err) {
        console.error(err)
    }
})