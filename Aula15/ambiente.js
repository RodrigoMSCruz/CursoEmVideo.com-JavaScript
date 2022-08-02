let num = [5,8,4]
num[3]=6
num.push(7)
num.sort()
console.log(`O nosso vetor é ${num}.`)
console.log(`O comprimento do array é: ${num.length}.`)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

console.log('')

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

console.log('')

if(num.indexOf(8) == -1){
    console.log(`O 8 não existe.`)
}
else{
    console.log(`O 8 está na posição: ${num.indexOf(8)}.`)
}

