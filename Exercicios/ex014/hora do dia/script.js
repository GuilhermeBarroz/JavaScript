function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem') 
   var data = new Date()
   var hora = data.getHours()

   msg.innerHTML = (`Agora são ${hora} horas`)
   if (hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#85c7fa'
   }else if(hora >=13 && hora < 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#bc6e39'
   }else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#001040'
   }
}



