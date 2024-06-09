const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const https = require('https');

const app = express();

const PORT = process.env.PORT || 3000;

// Configure Multer storage to use memory for temporary storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Handling large file uploads with streams
app.post('/upload', upload.single('file'), (req, res) => {
  const fileBuffer = req.file.buffer; // Access the file buffer
  const writeStream = fs.createWriteStream(path.join(__dirname, 'uploads', req.file.originalname));
  
  writeStream.write(fileBuffer);
  writeStream.end();

  writeStream.on('finish', () => {
    res.status(200).send('File uploaded successfully');
  });

  writeStream.on('error', (err) => {
    console.error(err);
    res.status(500).send('File upload failed');
  });
});

// Streaming large files to clients
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  const readStream = fs.createReadStream(filePath);

  // Pipe the read stream to the response
  readStream.pipe(res);

  readStream.on('error', (err) => {
    console.error(err);
    res.status(404).send('File not found');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
