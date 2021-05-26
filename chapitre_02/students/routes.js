const express = require("express");
const app = express();

const port = 8000;

let students = ["Frank", "Ben", "Paul"]

app.get("/students", (req, res) => {
    
    res.send(students);
    console.log(students);
    
});

app.post()


app.listen(port, function () {
    console.log(`Server is working on port: ${port}`)
})