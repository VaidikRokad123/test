const mongoose = require('mongoose');

const vesselSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    vessel_number: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Vessel', vesselSchema);

