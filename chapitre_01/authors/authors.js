const express = require("express");
const app = express();

const port = 8000;

// Home page
app.get('/', (req, res) => {
    res.send("Authors API");
});

// Routes
app.get("/1/books", (req, res) => {
    res.send("Lawrence Nowell, UK");
    res.send("Beowulf");
});

app.get("/2/books", (req, res) => {
    res.send("William Shakespeare, UK");
    res.send("Hamlet, Othello, Romeo and Juliet, MacBeth");

});

app.get("/3/books", (req, res) => {
    res.send("Charles Dickens, US");
    res.send("Oliver Twist, A christmas Carol");

});

app.get("/4/books", (req, res) => {
    res.send("Oscar Wilde, UK")
    res.send("The picture of Dorian Gray, The Importance of Being Earnest");

});

app.get("/5/books", (req, res) => {
    res.send("Herman Melville, US")
    res.send("Moby dick");

});

// Run server
app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});

// app.get('/id/:id/id/nationality', function (req, res) {
//     var authors = req.params.authorsName;
//     var id = "";
//     var nationality = "";

//     switch (authors) {
//         case "1":
//             id = "Paris";
//             nationality = "Europe"
//             break;

//         case "2":
//             id = "Madrid";
//             nationality = "Europe"
//             break;

//         case "3":
//             id = "Buenos Aires";
//             nationality = "America"
//             break;

        // default:
        //     id = "not found"
        //     nationality = "none"
        //     break;
//     }

//     res.json({
//         capital: id,
//         nationality: nationality
//     });
// });


// app.listen(port, function () {
//     console.log('Serveur lancé et en écoute dans le port: ' + port);
// });



// var request = require("request");

// request.get(
    
//     "http://localhost:8000/authors/france/capital",

//     function (err, res, body) {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         var result = JSON.parse(body);

//         console.log("result :", result);
//     }
// );