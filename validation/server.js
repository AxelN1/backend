const express = require("express");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const passwordValidator = require("password-validator");
const userName = require("./model/username");

const app = express();
app.use(express.json());

const port = 8000


mongoose.connect("mongodb://localhost:27017/username", (err) => {
  if (err) {
    console.error(err)
} else {
    console.log("I'm connected to the database");
}
})

app.post('/signup',
expressValidator.body("username").is().min(4),
expressValidator.body("email").isEmail(),
expressValidator.body("age").is().max(2),
expressValidator.body("city").custom((value) => {
  var city = new cityValidator();
  city
  .is().oneOf(["Paris", "Tokio", "Los Angeles"]);
        return schema.validate(value);
}),
(req, res) => {
  const errors = validationResult(req);
  console.log('req :', req.body);
  console.log('errors :', errors);

  if (errors.isEmpty() === false) {
      res.status(400).json({errors: "error 400"})
  }

  res.json("Ca marche")
}
}

    app.get("*", (req, res) => {
      console.log('All requests');
    })
    
    app.listen(8000, () => {
      console.log("server started")
});