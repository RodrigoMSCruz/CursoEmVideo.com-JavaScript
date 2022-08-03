let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []


function isNumero(n){
    if((Number(n) >= 1) && (Number(n) <=100)){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n) == -1)){
        return false
    }
    else{
        return true
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
    }
    else{
        window.alert("Valor fora dos limites entre 1-100 ou repetido!")
    }
}