const express = require("express");
const app = express();

app.get('/hello/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}!`,
    });
});

var port = 8000;

app.get('/country/:countryName/capital', function (req, res) {
    var country = req.params.countryName;
    var capitalCity = "";
    var continent = "";

    switch (country) {
        case "france":
            capitalCity = "Paris";
            continent = "Europe"
            break;

        case "spain":
            capitalCity = "Madrid";
            continent = "Europe"
            break;

        case "argentina":
            capitalCity = "Buenos Aires";
            continent = "America"
            break;

        default:
            capitalCity = "not found"
            continent = "none"
            break;
    }

    res.json({
        capital: capitalCity,
        continent: continent
    });
});


app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});



var request = require("request");

request.get(
    
    "http://localhost:8000/country/france/capital",

    function (err, res, body) {
        if (err) {
            console.error(err);
            return;
        }

        var result = JSON.parse(body);

        console.log("result :", result);
    }
);