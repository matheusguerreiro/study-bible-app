const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

const port = 3002;
server.listen(port, () => {
  console.log(`API Server está rodando em http://localhost:${port}`);
});
