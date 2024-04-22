const fs = require('fs')
const { Transform } = require('stream')

const readableStream = fs.createReadStream('./files/sample.txt')
const writableStream = fs.createWriteStream('./files/sample2.txt')

const transformedData = new Transform({
    transform(chunk,encoding,callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

readableStream.pipe(transformedData).pipe(writableStream);


readableStream.on('error', (err) => console.error(err));
writableStream.on('error', (err) => console.error(err));



writableStream.on('finish', () => {
    console.log('Finished!!')
});
