const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },

    mood:{
        type: String
    },

    confidence : {
        type: Number
    },

    createdAt : {
        type: Date,
        default : Date.now
    }

},{
    timestamps: true
});

const moodModel = mongoose.model("mood",moodSchema)

module.exports = moodModel