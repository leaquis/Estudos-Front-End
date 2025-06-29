const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o seu nome? ', function(name){
    console.log(`Olá, ${name}!`);
    rl.question('Qual a sua idade? ', function(idade){
        console.log(`Você tem ${idade} anos.`);
    })
});

rl.on('close', function() {
    console.log('\nAdeus!');
    process.exit(0);
});
