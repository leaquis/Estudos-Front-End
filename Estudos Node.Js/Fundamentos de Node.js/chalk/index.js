import chalk from 'chalk';

const nota = 5;

if(nota >= 7) {
    console.log(chalk.green("Parabens! Você foi aprovado!"));
} else {
    console.log(chalk.bgRed("Você foi reprovado!"));
}
