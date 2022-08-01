function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
   
    //if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
    //string.value.lenght não funciona!!!
    if(ini.value == '' || fim.value == '' || passo.value == ''){
        window.alert('Erro! Preencha todos os campos!')
    }
    else{
        res.innerHTML = `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p == 0){
            window.alert("Passo inválido! Considerando o passo igual a 1!")
            p = 1
        }
        else if(p < 0){ //Se o passo for negativo, é convertido para positivo.
            window.alert("O passo negativo é considerado em módulo mesmo se o inicial for maior que o final.")
            p = p * (-1)
        }
        if(i < f){ //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} ->`
            }    
        }
        else{ //Contagem regressiva
            for(let c = i; c >= f; c = c - p){
                res.innerHTML += ` ${c} ->`
            }
        }
        
        res.innerHTML += `FIM`
    }
}