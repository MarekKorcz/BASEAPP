const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Log = require('./Log')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 51,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    loggs: {
        type: Schema.Types.ObjectId,
        ref: 'Log'
    }
})

module.exports = mongoose.model('User', userSchema)