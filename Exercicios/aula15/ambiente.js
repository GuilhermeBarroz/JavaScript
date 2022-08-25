let num = [5, 8, 2, 9, 3,]
num.push(1) //
num.sort(function(a, b){return a-b}) //Metodo interno que vai colocar o array em ordem.

console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
let pos = num.indexOf(4) //Vai retornar o key que o valor está. Quando o valor não existe é retornado -1
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
