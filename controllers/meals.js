const db = require('../models');

const showAllMeals = (req, res) => {
    db.Meal.find({}).exec((err, allMeals) => {
        if (err) {
            return console.log(err)
        };
        res.json({
            status: 200,
            count: allMeals.length,
            data: allMeals
        });
    });
};

const addMeal = (req, res) => {
    console.log(req.body);

    db.Meal.create(req.body, (error, createdMeal) => {
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: createdMeal.length,
            data: createdMeal,
            createdAt: new Date().toLocaleString()
        })
    })

}

module.exports = {
    showAllMeals: showAllMeals,
    addMeal: addMeal,
}