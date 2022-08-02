function parimpar(n){
    if(n % 2 == 0){
        return 'Par'
    }
    else{
        return 'Ímpar'
    }
}

n = 4
console.log(`O número ${n} é ${parimpar(n)}.`)