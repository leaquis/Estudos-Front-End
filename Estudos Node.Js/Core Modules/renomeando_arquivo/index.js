const fs = require('fs');

const arqAntigo = "arquivo.txt";
const arqNovo = "novo_arquivo.txt";

fs.rename(arqAntigo, arqNovo, function(err) {
    if(err) {
        console.error("Erro ao renomear o arquivo:", err);
        return;
    }
    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`);
})
