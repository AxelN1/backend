const express = require("express");
const expressValidator = require("express-validator");
const passwordValidator = require("password-validator");

const app = express();
app.use(express.json());




app.post('/signup',
expressValidator.body("username").is().min(4),
expressValidator.body("email").isEmail()
expressValidator.body("age").is().max(2),
expressValidator.body("city").custom((value) => {
  var city = new cityValidator();
  city
  
  

}),

    
    app.get("*", (req, res) => {
    
    })
    
    app.listen(8000, () => {
      console.log("server started")
})