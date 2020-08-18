const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serverSchema = new Schema({
    host: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    port: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Server', serverSchema)