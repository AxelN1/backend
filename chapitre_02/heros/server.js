var express = require("express");
const cors = require("cors")

const app = express()

const herosName = require("./superHeros")

app.use(express.json()) 
app.use(cors())

const port = 8000



app.get("/heros", (req, res, next) => {
    res.json(herosName)
    console.log(`start of the port, ${port}` );
  })

  app.use(function(req, res, next) {
    console.log(body);
    next();
  });

  app.get('*', (req, res) => {
    res.json({
        errorMessage: "Erreur de chemin"
    })
})

  app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})