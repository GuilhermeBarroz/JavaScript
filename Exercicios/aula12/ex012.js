var agora = new Date()
var hora = agora.getHours()

console.log(`Agoa são ${hora} horas.`)

if(hora >= 5 && hora <12){
    console.log(`Bom dia!`)
} else if(hora >= 12 &&  hora < 18){
    console.log(`Boa tarde!`)
} else if (hora >= 00 && hora <=4){
    console.log(`Boa madrugada!`)
} else{
    console.log(`Boa noite!`)
}