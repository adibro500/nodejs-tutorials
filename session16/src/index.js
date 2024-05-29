const axios = require('axios')
//setImmediate

// setTimeout(() => console.log(10), 0)
// setImmediate(() => console.log(11))

async function fetchData() {
    let data = {}
    await axios.get('https://dummyjson.com/todos')
.then(async (res) => data = await res.data)
return data;
}

// fetchData().then(console.log)

let prom = new Promise((resolve, reject) => {
    axios.get('https://dummyjson.com/todos')
.then(resolve)
.catch(reject)
}) 

prom.then(console.log)