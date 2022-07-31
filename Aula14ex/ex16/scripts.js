function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
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
        if(i > f){
            p = p*(-1)
        }
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u(1F449)`
        }
        res.innerHTML += `\u(1F3C1)`
    }
}