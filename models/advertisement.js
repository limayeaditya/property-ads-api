const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    author_details: {
        type: Object,
    },
    property_details: {
        property_title: String,
        property_type : String,
        description : String,
        n_bhk : Number

    },
    address : {
        city : String,
        area_details : String
    },
    images : {
        type: [String],
        default: null
    },
    quoted_price : {
        type: Number
    },
    is_approved : {
        type: Boolean
    },
    interested :{
        type: Number
    }

    }, {
        timestamps: true
    });

module.exports = mongoose.model('advertisement', advertisementSchema)