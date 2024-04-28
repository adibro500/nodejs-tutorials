const axios = require('axios');

 function  getData(num) {
axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(response => response.data)
      .then(async (res) => await console.log(res))
}
