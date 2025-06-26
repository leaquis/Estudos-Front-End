const fs = require('fs');

console.log('Início do programa');

fs.writeFile('arquivo2.txt', 'Conteúdo do arquivo', function(err) {
    setTimeout(function() {
        console.log('Arquivo escrito com sucesso');
    }, 1000);
});

console.log('Fim do programa');