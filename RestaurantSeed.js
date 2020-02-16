const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestausantSchema = mongoose.Schema(
	{
    name: "Thainery",
    address: "380 Bush St #3, San Francisco, CA 94104",
    coordinates: {
        long: -122.403795,
        lat: 37.790905,
    },
    active: {
        type: Boolean,
        default: false,
    },
    hours: "10am -10pm",
    description: "Thai food fast",
    typeOfFood: "thai, curry"
	},
	{
		name: "Lao Table",
		address: "149 2nd St, San Francisco, CA 94105",
		coordinates: {
				long: -122.398731,
				lat: 37.787466,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Upscale chain restaurant serving cocktails & modern riffs on Thai classics in a stylish setting.",
		typeOfFood: "thai, curry"
	},
	{
		name: "Cha Am Thai",
		address: "701 Folsom St, San Francisco, CA 94107",
		coordinates: {
				long: -122.399093,
				lat: 37.783462,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Spacious eatery near Moscone Center serving classic Thai dishes & offering free delivery",
		typeOfFood: "thai, curry"
	},
	{
		name: "Osha Thai Restaurant and Lounge",
		address: "311 3rd St, San Francisco, CA 94107",
		coordinates: {
				long: -122.398482,
				lat: 37.783647,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Curries & other Thai classics are offered at this chic, contemporary local chain outpost.",
		typeOfFood: "thai, curry"
	},
	{
		name: "Jersey Pizza",
		address: "145 2nd St, San Francisco, CA 94105",
		coordinates: {
				long: -122.399046,
				lat: 37.787484,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Buzzy, brick-lined Italian spot serving clever East Coast-style pies, plus craft draft beer & wine",
		typeOfFood: "pizza"
	},
	{
		name: "Escape From New York Pizza",
		address: "715 Harrison St, San Francisco, CA 94107",
		coordinates: {
				long: -122.397483,
				lat: 37.782475,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "SoMa outpost of a local chain serving up signature thin-crust pizzas close to AT&T Park",
		typeOfFood: "pizza"
	},
	{
		name: "SoMa Pizza",
		address: "483 3rd St, San Francisco, CA 94107",
		coordinates: {
				long: -122.396004,
				lat: 37.781662,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Compact, basic counter serve with late-night hours dishing out slices, pies, wings & burgers.",
		typeOfFood: "pizza"
	},
	{
		name: "21st Amendment Brewery & Restaurant",
		address: "563 2nd St, San Francisco, CA 94107",
		coordinates: {
				long: -122.392579,
				lat: 37.782423,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Housemade brews, pub grub & brunch are served at this restaurant plus bar near AT&T Park",
		typeOfFood: "pizza"
	},
	{
		name: "Spice Kit",
		address: "405 Howard St #310, San Francisco, CA 94105",
		coordinates: {
				long: -122.395640,
				lat: 37.788425,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Casual eatery featuring Asian street food that's made to order from organic ingredients.",
		typeOfFood: "Asian"
	},
	{
		name: "Yank Sing",
		address: "49 Stevenson St, San Francisco, CA 94105",
		coordinates: {
				long: -122.399399,
				lat: 37.789910,
		},
		active: {
				type: Boolean,
				default: false,
		},
		hours: "10am -10pm",
		description: "Classic dim sum served from carts is the main draw at this bustling Chinese standby",
		typeOfFood: "Asian"
	},
)

const Restaurant = mongoose.model('Restaurant', RestausantSchema);

module.exports = Restaurant;