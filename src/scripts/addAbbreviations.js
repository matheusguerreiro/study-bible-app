const fs = require('fs');

let condition = true

// Abreviações correspondentes a cada livro
const abbreviations = [
  "Gn", "Êx", "Lv", "Nm", "Dt", "Js", "Jz", "Rt", "1 Sm", "2 Sm",
  "1 Rs", "2 Rs", "1 Cr", "2 Cr", "Esd", "Ne", "Et", "Jó", "Sl", "Pv",
  "Ec", "Ct", "Is", "Jr", "Lm", "Ez", "Dn", "Os", "Jl", "Am", "Ob",
  "Jn", "Mq", "Na", "Hc", "Sf", "Ag", "Zc", "Ml", "Mt", "Mc", "Lc",
  "Jo", "At", "Rm", "1 Co", "2 Co", "Gl", "Ef", "Fp", "Cl", "1 Ts",
  "2 Ts", "1 Tm", "2 Tm", "Tt", "Fm", "Hb", "Tg", "1 Pe", "2 Pe", "1 Jo",
  "2 Jo", "3 Jo", "Jd", "Ap"
];

// Caminho para o arquivo db.json
const dbJsonPath = '../db/db.json';

// Lê o conteúdo atual do arquivo db.json
const jsonData = JSON.parse(fs.readFileSync(dbJsonPath, 'utf8'));

if (jsonData.book[0].hasOwnProperty('abbreviation')) {
  condition = false
}

if (condition) {
  // Adiciona o campo 'abbreviation' a cada livro
  jsonData.book.forEach((book, index) => {
    book.abbreviation = abbreviations[index];
  });

  // Escreve o JSON atualizado de volta no arquivo db.json
  fs.writeFileSync(dbJsonPath, JSON.stringify(jsonData, null, 2));

  console.log('Abreviações foram adicionadas ao arquivo db.json.');
} else {
  console.log('Abreviações já foram adicionadas ao arquivo db.json!');
}
