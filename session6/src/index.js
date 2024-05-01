/*
Three ways to create child process:
1. spawn
2. exec
3. execFile
*/
const {spawn, exec} = require('child_process');
const { Buffer } = require('buffer');

// const listfiles = spawn('dir', {shell: true})

// listfiles.stdout.on('data', (data) => console.log(data.toString()))
// listfiles.stderr.on('data', (data) => console.log(data.toString()))
// listfiles.on('error', (error) => console.error(error.message))

// exec('node src/nodemod.js', (error, stdout, stderr) => {
//     console.log(`${stdout}`);
// })

// exec('start chrome')
// let j = 12;
let a  = [1, 6, 3, 4]
let buff3 = Buffer.from(a);
let buff = Buffer.alloc(5, 'a');
// console.log(buff)

let buff2 = Buffer.from(buff.buffer)
buff2 = Buffer.alloc(2, 'b')
console.log(buff3.toString('base64'))

/**
 * alloc(),
 * from(),
 * buffer,
 * toString()
 *
 * 
 */