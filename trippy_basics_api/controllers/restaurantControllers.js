const restaurantModel = require("../models/restaurant")
const expressValidator = require("express-validator");

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find().lean()

        res.json(restaurants)

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const getRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id
        const restaurant = await restaurantModel.findById(idRestaurant).lean()

        res.json(restaurant)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addRestaurant = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newRestaurant = await restaurantModel.create(req.body)

            res.json({ message: "The restaurant was added!", newRestaurant })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const changeRestaurantName = async (req, res) => {
    try {
        const id = req.params.id
        const newNameRestaurant = req.body.name

        await restaurantModel.findByIdAndUpdate(id, { name: newNameRestaurant })
        res.json({
            message: `The restaurant name was changed`
        })
    } catch (err) {
        console.error('Error', err)
        res.status(500).json({ message: "There was a problem"})
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id

        await restaurantModel.findByIdAndDelete(restaurantId)
        res.json({
            message: `The restaurant has been delete`
        })
    } catch (err) {
        console.error('Error', err)
        res.status(500).json({ message: "There was a problem" })
    }
}

module.exports = {
    getRestaurants,
    getRestaurant,
    addRestaurant,
    changeRestaurantName,
    deleteRestaurant
}