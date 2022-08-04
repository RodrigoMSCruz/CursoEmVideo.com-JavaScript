let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []



function isNumero(n){
    if((n >= 1) && (n <=100)){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(n) == -1){
        return false
    }
    else{
        return true
    }
}

function adicionar(){
    if(isNumero(Number(num.value)) && !inLista(Number(num.value), valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `${num.value}`
        //item.value = `lista${num.value}`
        fseltab.appendChild(item)

    }
    else{
        window.alert("Valor fora dos limites entre 1-100 ou repetido!")
    }
}

function finalizar(){
    res.innerHTML = ''
    let maior = -1
    let menor = 101
    let soma = 0
    
    for(var i in valores){
        if(valores[i] > maior){
            maior = valores[i]
        }
        if(valores[i] < menor){
            menor = valores[i]
        }
        soma = soma + valores[i]
    }
    res.innerHTML += `O maior número é ${maior}<br>`
    res.innerHTML += `O menor número é ${menor}<br>`
    res.innerHTML += `O somatório é  ${soma}<br>`
    res.innerHTML += `A média é  ${soma/valores.length}`
}