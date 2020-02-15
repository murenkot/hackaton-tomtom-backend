const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
    meal: [{
        type: Schema.Types.ObjectId,
        ref: "Meals",
    }],
    timeStamp: { type: Date, default: Date.now },
    customer: [{
        type: Schema.Types.ObjectId,
        ref: "Customer",
    }],
    paid: Boolean,
    pickedUp: Boolean
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;