//--------------------------------SETUP
// external modules
const express = require('express');
const bodyParser = require('body-parser');
// internal modules
const db = require('./models');
const routes = require('./routes');
// instanced module
const app = express();


//--------------------------------MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-------------------------------CONFIGURATION VARIABLES
// const PORT = process.env.PORT || 3000;
require('dotenv').config();
const PORT = process.env.PORT;


// ---------------------- CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// ----------------------------------- Routes ----------------------------------- //

app.get('/', (req, res) => {
  res.send('<h1>No Food Waste</h1>');
});


app.use('/api/v1/restaurants', routes.restaurants);
app.use('/api/v1/meals', routes.meals);
// app.use('/api/v1/posts', routes.posts);

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`));