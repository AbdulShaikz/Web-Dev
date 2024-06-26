const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },

    redirectURL: {
        type: String,
        required: true,
    },

    visitedHistory: [{
        timestamp: {
            type: Number,
        }
    }],
},{timestamps: true});

const Url = mongoose.model('Url',urlSchema);

module.exports = Url;