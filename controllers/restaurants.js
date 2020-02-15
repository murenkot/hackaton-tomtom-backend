const db = require('../models');

const showAll = (req, res) => {
    db.Restaurant.find({}).exec((err, allRestaurants) => {
        if (err) {
            return console.log(err)
        };
        res.json({
            status: 200,
            count: allRestaurants.length,
            data: allRestaurants,
        });
    });
};

const addRestaurant = (req, res) => {
    console.log(req.body);

    db.Restaurant.create(req.body, (error, createdRestaurant) => {
        if (error) return console.log(error);
        res.json({
            status: 200,
            count: createdRestaurant.length,
            data: createdRestaurant,
            createdAt: new Date().toLocaleString()
        })
    })
} 


module.exports = {
    showAll: showAll,
    addRestaurant: addRestaurant,
}