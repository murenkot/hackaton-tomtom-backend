const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//GET all Meals
router.get('/', ctrl.meals.showAllMeals);

// ADD a new meal
router.post('/new', ctrl.meals.addMeal);


module.exports = router;