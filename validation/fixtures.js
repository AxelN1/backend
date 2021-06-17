const mongoose = require('mongoose')
const UserName = require('./model/username');

mongoose.connect("mongodb://localhost:27017/username", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addUserName = async () => {

    try {
        await UserName.deleteMany({})

        await UserName.insertMany([
            {
                username: "ernesto",
                email: "ernesto@gmail.com",
                age: 42,
                city: "La Havane",
            },
            {
                username: "Emery",
                email: "emery@yahoo.fr",
                age: 33,
                city: "New York",
            }
        ])

        console.log("The collection created");

    } catch (err) {
        console.error(err)
    }
}

addUserName()