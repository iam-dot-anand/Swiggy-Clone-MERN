const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    restaurant_id: {
        types: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    pinCode: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    }

});

const AddressModel = mongoose.model('Address', addressSchema);
module.exports = AddressModel;
