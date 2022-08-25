function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonasc')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex') //[0][1] 0 é o primeiro input radio 1 é o segundo
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 11){
                //criança
                img.setAttribute('src', 'imagens/bbh.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'imagens/criancah.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/jovemh.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
                
        }else if(fsex [1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 11){
                //criança
                img.setAttribute('src', 'imagens/bbm.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/criancam.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/jovemm.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosam.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        res.appendChild(img) //adicionar o elemento img após o innerHTML
    }
}