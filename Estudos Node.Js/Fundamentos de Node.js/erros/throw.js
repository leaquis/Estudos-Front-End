const x = "10"

// checar se o x é um numero
if(!Number.isInteger(x)) {
    throw new Error("x não é um numero inteiro!")
}

console.log("Continuando o código")
