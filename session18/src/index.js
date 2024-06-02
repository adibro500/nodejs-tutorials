const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const kittenRoutes = require('./routes/kittenRoutes')
const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mongo-express', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', (err) => {console.log(err)})
db.on('open', () => { console.log('database connected')})

app.listen(3000, () => {
    console.log('server listening on port 3000');
})

app.use('/api', kittenRoutes);