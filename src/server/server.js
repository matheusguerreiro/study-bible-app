const express = require('express');
const sqlite3 = require('better-sqlite3');

const app = express();
const port = process.env.PORT || 3001;

const db = sqlite3('src/bibles/ARC.sqlite');

app.get('/books', (req, res) => {
  const data = db.prepare('SELECT * FROM book').all();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
