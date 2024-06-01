const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

 
// '/' endpoint
// http://localhost:8000/
app.get('/', (req, res) => {
   return res.send('hello world!'); 
})

app.get('/item/:id', (req, res) => {
    console.log(JSON.stringify(req.query.value1));
    return res.send(req.params.id); 
 })

app.post('/post/:id', (req, res) => {
    console.log(JSON.stringify(req.params.id))
    return res.send(req.body);
});

app.listen(8000, () => {
    console.log('server listening at port 8000');
})