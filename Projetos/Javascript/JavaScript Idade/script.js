function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4) {
                //bb
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 14) {
                //criança
                img.setAttribute('src', 'homem-criança.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 4) {
                //bb
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 14) {
                //criança
                img.setAttribute('src', 'mulher-criança.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}