var valores = [8,1,7,2,9,10]

/*for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

