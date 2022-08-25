/*
Tabuada console
let n1 = 1
fim = 10
resultado = n1

for(contador = 1; contador <= fim; contador ++){
    console.log(`${n1}x${contador} = ${resultado*contador}`)
}
*/

//Tabuada HTML

function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por faovr, digite um número.')
        
    }else{
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = '' //Antes de mostrar a tabuada a área dela é limpa
        while(contador <= 10){
            //interação com o site
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            tab.appendChild(item)
            contador++
        }   
    }
}