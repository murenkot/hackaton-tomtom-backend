const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/restaurants


//GET All Posts
router.get('/', ctrl.restaurants.showAll);

// ADD POST
router.post('/new', ctrl.restaurants.addRestaurant);

module.exports = router;
