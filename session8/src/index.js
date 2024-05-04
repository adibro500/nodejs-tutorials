// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello From Root of Express");
});

app.get('/hello', (req, res) => {
    res.send("Hello From Express");
});

app.post("/post-data", (req, res) => {
    res.send(req.body.message)
})

app.listen(4000, () => {
console.log("Server listening on port 4000")
});