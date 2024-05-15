const mongoose = require('mongoose')
const Kitten = require('./models')

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.on('open', () => console.log('database connection established'))


const kitten = new Kitten({
    name: 'tom'
})

// kitten.save().then(() => {console.log('saved kitten')}).catch((err) => console.log('error occured'));
Kitten.find().then((kittens) => console.log(kittens))

// Kitten.findById('664426bd971b90f5225f78bb').then((kittens) => console.log(kittens))
// Kitten.findByIdAndDelete('664426bd971b90f5225f78bb')
// .then(() => console.log('deleted'))
// .catch((err) => console.log('error'))
// Kitten.findByIdAndUpdate('6644267b7b401648f3fb9505', {$set: {name: 'sylvester'}})
// .then(() => console.log('updated')).catch((err) => console.log('error occured'))
