const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = mongoose.Schema({
    name: String,
    description: String,
    type: String,
    price: Number,
    discountedPrice: Number,
    inventory: Number,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    picture: String
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;