const {spawn, exec} = require('child_process');

const listfiles = spawn('dir', {shell: true});

listfiles.stdout.on('data', (data) => console.log(data.toString()))
listfiles.stderr.on('data', (data) => console.log(data.toString()))
listfiles.on('error', (error) => console.error(error.message))

exec('node src/nodemod.js', (error, stdout, stderr) => {

    console.log(`${stdout}`);
})

// exec('start chrome')

// exec('copy src/nodemod.js dummy.js', (error, stdout, stderr) => {
//     console.log(`${stdout}`)
// })