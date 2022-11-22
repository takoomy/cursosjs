function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/fotodia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#032F56'
    }
}