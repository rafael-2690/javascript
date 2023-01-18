function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var agora = data.getHours()
    msg.innerHTML = `Agora são ${agora} horas. `
    if (agora >= 6 && agora < 12 ) {
        //dia
        img.src ='manhã.png'
        document.body.style.background = 'red'
    } else if (agora >= 12 && agora < 18 ){
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    }else if (agora >= 18){
        //noite
        img.src = 'noite.png'
        document.body.style.background = 'blue'
    }

    
}   