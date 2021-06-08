const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/school', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Im connected to the database');
    }
})

const studentsSchema = new mongoose.Schema({
    name: String,
    city: String
})

const Student = mongoose.model('Student', studentsSchema)

Student.insertMany([
    {
        name: "Véronique",
        city: "Paris"
    },
    {
        name: "Steeven",
        city: "Lyon"
    },
    {
        name: "Marc",
        city: "Marseille"
    },
    {
        name: "Nour",
        city: "Lyon"
    },
    {
        name: "Romain",
        city: "Paris"
    },
    {
        name: "Sophie",
        city: "Paris"
    },
]).then(data => {
    console.log(data)
}).catch(err => {
    console.error("Error", err)
})