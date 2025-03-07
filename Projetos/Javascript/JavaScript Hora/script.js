function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        //dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'tarde.src'
        document.body.style.background = '#b9846f'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}