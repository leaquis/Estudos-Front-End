let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`${num}`)
num.push(1)
num.sort()
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`${num}`)

for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor esta na posição ${pos}`)
}