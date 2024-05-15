const mongoose = require('mongoose');
const KittenSchema = require('./schemas')

const Kitten = mongoose.model('Kitten', KittenSchema);

module.exports = Kitten