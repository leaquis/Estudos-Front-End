const http = require("http");

const port = 3000;  

const server = http.createServer((rew, res) => {

    res.write('Oi HTTP!');
    res.end();

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})
