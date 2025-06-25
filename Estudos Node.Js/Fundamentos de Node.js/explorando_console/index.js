const x = 27
const y = "Giovani"
const z = [1, 2, 3, 4, 5]

console.log(x, y, z)

// contagem
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
console.log("Meu nome é %s e tenho %d anos", y, x)
console.log(`Meu nome é ${y} e tenho ${x} anos`)

// limpar console
setTimeout(() => {
  console.clear()
}, 3000)
