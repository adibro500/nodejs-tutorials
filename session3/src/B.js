const A = require('./A');

class B extends A {
    returnName(name) {
        console.log(super.returnName(name));
    }

} 

module.exports = B