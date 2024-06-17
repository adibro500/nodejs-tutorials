const express = require('express')
const globalErrorHandler = require('./errController')
const CustomError = require('./customError')

const app = express()

app.get('/hello', (req, res) => {
    res.status(200).send('hello world');
})


app.all('*', (req, res, next) => {
    const err = new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
    next(err);
});

app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log('server listening on port 3000');
})
