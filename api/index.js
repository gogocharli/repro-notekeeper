const express = require('express'); // connect to the server = npm i express
const cors = require('cors'); // bypass CORS = npm i cors
const fs = require('fs'); // filesystem npm i fs
const path = require('path'); // npm i path
const data = require('./NoteDb.json');
//--------------------------
const filePath = path.join(__dirname, 'NoteDb.json');
const PORT = process.env.PORT || 3000; // connect to host port or 3001
const app = express(); // connect to the server
//---------------------------------------------
app.use(cors()); // bypass CORS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.json(data);
});

app.post('/api', (req, res) => {
  console.log(req.body);
  console.log(data.notes.length);
  //--------------------
  data.notes.push(req.body);
  console.log(data.notes.length);
  //--------------------
  console.log('this is the file path ' + filePath);
  const testlistJson = JSON.stringify(data);
  fs.writeFileSync('./NoteDb.json', testlistJson, 'utf8');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
