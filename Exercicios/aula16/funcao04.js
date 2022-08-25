function fatorial (n){
    let fatorial = 1

    for(contador = n; contador > 1; contador-=1 ){
        fatorial *= contador
    }
    return fatorial
}
console.log(fatorial(5))  
