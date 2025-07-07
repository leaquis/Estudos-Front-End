// modulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//modulos internos
import fs from 'fs';
import { get } from 'http';

operation();

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                "Sair"
            ],
        }
    ])
    .then((answer) => {
        const action = answer['action'];

        if(action === 'Criar conta') {
            createAccount();
        } else if(action === 'Consultar saldo') {
            
        } else if(action === 'Depositar') {
            deposit();
        } else if(action === 'Sacar') {
            
        } else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o nosso banco!'));
            process.exit();
        }
    })
    .catch(err => console.log(err));
}

// criar a conta
function createAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolher o nosso banco!!'))
    console.log(chalk.green('Defina as opcoes da sua conta a seguir:'));
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            "name": 'accountName',
            "message": 'Digite um nome para a sua conta:'
        }
    ]).then((answer) => {
        const accountName = answer['accountName'];

        console.info(accountName);

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome!'));
            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            console.log(err);
        })

        console.log(chalk.green('Parabens, sua conta foi criada com sucesso!'));
        operation();
    }).catch(err => console.log(err));
}

// adicionar uma quantia ao saldo da conta
function deposit() {
    inquirer.prompt({
        name: 'accountName',
        message: 'Qual o nome da conta que deseja depositar?'
    })
    .then((answer) => {
        const accountName = answer['accountName'];

        //verificar se a conta existe
        if(!checkAccount(accountName)) {
            return deposit();
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto deseja depositar?'
        }]).then((answer) => {
            const amount = answer['amount'];

            // adicionar uma quantia
            addAmount(accountName, ammount)
            operation()
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

//verificar se a conta existe
function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta nao existe, escolha outro nome!'));
        return false;
    }

    return true;
}

// adicionar uma quantia
function addAmount(accountName, ammount) {
    const accountData = getAccount(accountName);

    if(!ammount) {
        console.log(chalk.bgRed.black('Ocorreu um erro! Tente novamente mais tarde'));
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData)

    fs.writeFile(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$ ${ammount} na sua conta!`));
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJSON);
}
