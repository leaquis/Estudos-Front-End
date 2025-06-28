const fs = require("fs");

fs.unlink("arquivo.txt", function(err) {

    if(err) {
        console.log("Erro ao remover o arquivo:", err);
        return;
    }

    console.log("Arquivo removido com sucesso!")
})
