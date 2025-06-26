const fs = require('fs');

console.log('Inicio do programa');

fs.writeFileSync('arquivo.txt', 'Conteúdo do arquivo');

console.log('Arquivo escrito com sucesso');
