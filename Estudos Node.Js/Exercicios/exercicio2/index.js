const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
        name: 'p1',
        message: "Qual é o seu nome? ",
    },
    {
        name: 'p2',
        message: "Qual é a sua idade?",
    },
]).then((answers) => {
    const response = `O seu nome é ${answers.p1} e você tem ${answers.p2} anos.`
    console.log(chalk.bgYellow.black(response));
}).catch(err => console.log(err));
