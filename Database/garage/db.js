const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage')

console.log("Connexion effectuée avec succès !");

// Création de l'entité cars
const cars = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: {
        type: Date,
        defaut: Date.now
    }
})

// Création d'un modèle mongoose de Car
const Car = mongoose.model('Car', cars)


// Ajout de voiture
const renault = new Car({
    brand: "Renault",
    model: "Espace",
    year: 1999
})
renault.save().then(res => console.log(res))


const renault2 = new Car({
    brand: "Renault",
    model: "Scenic",
    year: 2004
})
renault2.save().then(res => console.log(res))

const peugeot = new Car({
    brand: "Peugeot",
    model: "308",
    year: 2017
})
peugeot.save().then(res => console.log(res))