const { types, ref, string, required } = require('joi');
const mongoose = require('mongoose');
const { restart } = require('nodemon');

const restaurantSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    restaurantName: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
    },
    desc:
    {
        type: String,
    },
    address:{
        type:String,
        required:true
    },
    tag:{
        type:String
    }
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);
module.exports = RestaurantModel;
