let num = [5, 8, 2, 9, 3]
//num[5] = 7
num.push(1)
num.sort()
console.log(num)

console.log(`O vetor tem ${num.length} posicoes`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 esta na posicao ${pos}`)
}
