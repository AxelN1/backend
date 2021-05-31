var express = require("express");
const cors = require("cors")

const app = express()

const herosName = require("./superHeros")

app.use(express.json()) 
app.use(cors())

const port = 8001


// app.get(function(req, res, next) {
//   // console.log(body);
//   // next();
// });

app.use("/", (req, res, next) => {
  res.json(herosName)
  next()
})


app.get("/heros/:name", (req, res) => {
    const heros = herosName.name
    res.render('hero', req.params.name)
    console.log(`start of the poort, ${port}` );
    // next()
  })


  // app

  app.get('*', (req, res) => {
    res.json({
        errorMessage: "Erreur de chemin"
    })
})

  app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})