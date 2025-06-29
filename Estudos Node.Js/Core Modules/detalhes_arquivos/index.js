const fs = require('fs');

fs.stat("novoarquivo.txt", (err, stats) => {
    if (err) {
        console.log("Erro ao obter informações do arquivo:", err);
        return;
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})
