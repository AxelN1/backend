const express = require("express");
const app = express();

const port = 8000;

// Home page
app.get('/', (req, res) => {
    res.send("Authors API");
});

// Routes
app.get("/1", (req, res) => {
    res.send("Lawrence Nowell, UK");
});

app.get("/2", (req, res) => {
    res.send("William Shakespeare, UK");
});

app.get("/3", (req, res) => {
    res.send("Charles Dickens, US");
});

app.get("/4", (req, res) => {
    res.send("Oscar Wilde, UK")
});

app.get("/5", (req, res) => {
    res.send("Herman Melville, US")
});

// Run server
app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});