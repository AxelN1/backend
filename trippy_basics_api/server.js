const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("./hotel")
const Restaurant = require("./restaurant")

mongoose.connect("mongodb://localhost:27017/trippy", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/hotel", async (req, res) => {

    try {
        const hotel = await Hotel.find()

        res.json(hotel)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "Problem found " }, 500)
    }

})

app.get("/hotel/:id", async (req, res) => {

    try {
        const idHotel = req.params.id
        const hotel = await Hotel.findById(idHotel)

        console.log("hotel:", hotel)


        if (hotel) {
            res.json({ hotel })
        } else {
            res.json({
                message: "Hotel not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "Problem found" })
    }

})




const transformName = (req, res, next) => {
    if (req.body.name === undefined) {
        res.json({
            errorMessage: "Send hero name"
        })
    } else {
        req.body.name = req.body.name

        next()
    }
}


app.post("/hotel", transformName, async (req, res, next) => {
    try {
        const addHotel = req.body
        const hotel = await Hotel.findOne({ addHotel })

        if (hotel) {
            res.status(400).json({
                message: "The hotel already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "Problem found" })
    }
}, async (req, res) => {

    try {
        const hotel = req.body

        const newHotel = await Hotel.create(hotel)
        res.json({
            message: "Hotel added",
            newHotel
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Problem found" })
    }
})



app.get("/restaurants", async (req, res) => {

    try {
        const restaurant = await Restaurant.find()

        res.json(restaurant)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "Problem found " }, 500)
    }

})


app.get("/restaurants/:id", async (req, res) => {

    try {
        const idRestaurant = req.params.id
        const restaurant = await Restaurant.findById(idRestaurant)

        console.log("hotel:", restaurant)


        if (restaurant) {
            res.json({ restaurant })
        } else {
            res.json({
                message: "Restaurant not found"
            })
        }
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "Problem found" })
    }

})

app.post("/restaurants", transformName, async (req, res, next) => {
    try {
        const addRestaurant = req.body
        const restaurant = await Restaurant.findOne({ addRestaurant })

        if (restaurant) {
            res.status(400).json({
                message: "The restaurant already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "Problem found" })
    }
})

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})