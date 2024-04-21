const axios = require('axios');
async function apiCall() {
    let response = await axios.get('https://dummyjson.com/products')
    return response.data;
    }

function init() { 
let apiData = []
apiCall().then(async (res) => {apiData = await res; console.log("api data is : "+JSON.stringify(apiData));});
}
init();
let prom = new Promise((resolve, reject) => {
    resolve("Hi"),
    reject(err => console.error("Error"))
})

prom.then(u => console.log(u)).catch(e => console.log(e));


setTimeout(() => console.log("Hi"), 5000)



