/*
var c = 1
do{
    console.log(`Contando...${c}`)
    c++
} while(c <= 5)
*/
//--------------------
/*
console.log('Vai começar...')
for(var c = 1; c <= 5; c++){
    console.log(`Contando...${c}`)
}
console.log('FIM!')
*/

/*
    var fatorial = 5
    var resultado = fatorial
    var contador = 1

    for(contador = 1; contador < fatorial; contador = contador + 1){
            resultado = resultado * contador
    }
    console.log(`Fatorial de ${fatorial} é ${resultado}`)
*/

var fatorial = 5
var resultado = fatorial
var contador = 1

while(contador < fatorial){
    resultado = resultado*contador
    contador = contador + 1
}
console.log(`Fatorial de ${fatorial} é ${resultado}`)