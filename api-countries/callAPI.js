var request = require("request");

request.get("http://localhost:8000/countries", function (err, res, body) {

        var countries = JSON.parse(data)

        console.log(countries.reverse());

})