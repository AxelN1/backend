var express = require("express");
const cors = require("cors")

const app = express()

const herosName = require("./herosData")

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