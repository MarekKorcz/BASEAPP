const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')

const logSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    attempt: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Log', logSchema)