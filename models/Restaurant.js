const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestausantSchema = mongoose.Schema({
    name: String,
    address: String,
    coordinates: {
        long: Number,
        lat: Number,
    },
    active: {
        type: Boolean,
        default: false,
    },
    meals: [{
        type: Schema.Types.ObjectId,
        ref: "Meals",
    }],
})

const Restaurant = mongoose.model('Restaurant', RestausantSchema);

module.exports = Restaurant;