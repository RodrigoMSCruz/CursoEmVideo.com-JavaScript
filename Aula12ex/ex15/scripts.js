function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if ((fano.value.length == 0) || (fano.value > ano)){
        window.alert('Verifique os dados e verifique novamente.')
    }
    else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotobebemasculino.jpg')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src','fotojovemmasculino.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src','fotoadultomasculino.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src','fotoidosomasculino.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotobebefeminina.jpg')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src','fotojovemfeminina.jpg')
            }
            else if(idade < 50){
                //Adulta
                img.setAttribute('src','fotoadultafeminina.jpg')
            }
            else{
                //Idosa
                img.setAttribute('src','fotoidosafeminina.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}