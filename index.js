// Installation et importation
const express = require("express");
const app = express();

const port = 8000;

// Routes
app.get('/', (req, res) => {
    res.send("Beautiful homepage");
});

app.get("/hello", (req, res) => {
    res.send("Hello world")
});

app.get("/hola", (req, res) => {
    res.send("Hola todos !")
});

app.get('/bonjour', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send('Bonjour')
});

app.get("/bonjour/:name", (req, res) => {
    res.send(`Bonjour ${req.params.name}`)
})

app.get("/bonjour/:name/age/:age", (req, res) =>  {
    res.send(`Bonjour ${req.params.name} ! Tu as ${req.params.age} ans.`)
});


// Run server
app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});