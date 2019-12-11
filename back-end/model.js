const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    zpid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }, 
    zestimate: {
        type: String,
        required: true
    },
    yearBuilt: {
        type: String,
        required: true
    },
    useCd: {
        type: String,
        required: true
    },
    sqft: {
        type: String,
        required: true
    }, 
    totalRooms: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    accessDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('zillow-address', postSchema);