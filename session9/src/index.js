const {Client} = require('pg')
const express = require('express')
const app = express()

app.use(express.json())
const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "tutorials"
})

client.connect();

app.get("/users", (req, res) => {
    client.query('Select firstname, lastname from users', (err, results) => {
        if(!err) {
            // console.table(results.rows);
            res.send(results.rows)
        } else {
            res.send("Error");
        }
    })
})

app.post("/users", (req, res) => {
    let user = req.body;
    const text = `INSERT INTO users(firstname, lastname, locations) VALUES('${user.firstname}', '${user.lastname}', '${user.locations}')`;
    client.query(text, (err, results) => {
        if(!err) {
            res.send("Inserted");
        } else {
            res.send(err.message);
           // stream.pipe(res)
        }
    })
})

app.listen(4000, () => {
    console.log("Server listening on port 4000")
})