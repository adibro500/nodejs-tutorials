const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kittenSchema = new Schema({
    name: String
}, {timestamps: true})

const Kitten = mongoose.model('Kitten', kittenSchema)

module.exports = Kitten