const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURL } = require('./config');

const port = 8000;

const app = express();

mongoose.connect(
  mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("I'm connected to the database");
    }
  }
);


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('in get / route');
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});