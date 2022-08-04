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
        item.text = `${Number(num.value)}`
        //item.value = `lista${num.value}` // Apenas para PHP
        fseltab.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert("Valor fora dos limites entre 1-100 ou repetido!")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    res.innerHTML = ''
    let maior, menor
    maior = menor = valores[0]
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
    res.innerHTML += `<p>O total de números é: ${valores.length}.</p>`
    res.innerHTML += `<p>O maior número é: ${maior}.</p>`
    res.innerHTML += `<p>O menor número é: ${menor}.</p>`
    res.innerHTML += `<p>O somatório é: ${soma}.</p>`
    res.innerHTML += `<p>A média é: ${soma/valores.length}<p>`
}