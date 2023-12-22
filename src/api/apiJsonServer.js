const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db/db.json');
const middlewares = jsonServer.defaults();

const sqlite3 = require('better-sqlite3');
const db = sqlite3('../bibles/ARC.sqlite');

server.use(middlewares);

server.get('/books', (req, res) => {
  const data = db.prepare('SELECT * FROM book').all();
  res.json(data);
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`API Server está rodando em http://localhost:${port}`);
});
