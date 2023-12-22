const sqlite3 = require('better-sqlite3');
const fs = require('fs');

let condition = true

// Caminho para o seu arquivo SQLite
const sqlitePath = '../bibles/ARC.sqlite';

// Caminho para o arquivo JSON de destino
const jsonPath = '../db/db.json';

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

if (jsonData.book) {
  condition = false
}

if (condition) {
  // Conectar ao banco de dados SQLite
  const db = sqlite3(sqlitePath);

  // Obter uma lista de todas as tabelas no banco de dados
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();

  // Objeto que conterá todos os dados do banco de dados
  const databaseData = {};

  // Iterar sobre as tabelas e copiar os dados para o objeto
  tables.forEach(table => {
    const tableName = table.name;
    const query = `SELECT * FROM ${tableName}`;
    const data = db.prepare(query).all();
    databaseData[tableName] = data;
  });

  // Escrever os dados em um arquivo JSON
  fs.writeFileSync(jsonPath, JSON.stringify(databaseData, null, 2));

  // Fechar a conexão com o banco de dados
  db.close();

  console.log(`Todos os dados do banco de dados foram escritos em ${jsonPath}.`);
} else {
  console.log(`Todos os dados do banco de dados já foram escritos em ${jsonPath}!`)
}

