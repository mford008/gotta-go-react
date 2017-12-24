const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const path = require("path");
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === 'production') { // should this development?
  app.use(express.static('client/build'));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://localhost/gottago2',
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
