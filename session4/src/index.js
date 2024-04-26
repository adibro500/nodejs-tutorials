const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const additionSum = require('./emitters');
// Event Emitters are used when the child component wants to send data to parent component 
// in frameworks like react, angular and vue.  
//
eventEmitter.on('eve2', (...args) => console.log(additionSum(...args)))

eventEmitter.on('eve', function(...args) {
    const res = args.join(',')
    console.log(res)
})
eventEmitter.once('eve', function(...args) {
    // const res = args.join(',')
    console.log('once')
})
eventEmitter.on('eve', function(...args) {
    const res = args.join(',')
    console.log(res)
})
eventEmitter.prependListener('eve', function(...args) {
    // const res = args.join(',')
    console.log('prepend')
})
function callback(...args) {
    console.log(args.join(','));
} 

eventEmitter.on('eve', callback)
eventEmitter.on('eve', callback)
// eventEmitter.removeListener('eve', callback)
// eventEmitter.removeAllListeners('eve')
eventEmitter.emit('eve', 1, 2, 3, 4, 5);

eventEmitter.emit('eve2', 1, 2, 3, 4 ,5);
