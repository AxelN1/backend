const express = require("express");
const app = express();

var countries = ["RDC", "France", "Cuba", "Tibet", "Burundi"];

app.get("/countries", (req, res) => {

res.send(countries);

});

var port = 8000;

app.listen(port, function () {
    console.log(`Server is working on port: ${port}`)
})