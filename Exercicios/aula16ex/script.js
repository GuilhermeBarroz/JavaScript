let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = [] //fazendo a análise de dados a partir de um array

//Verificando se é um número e se está dentro dos parametros solicitados
function isNumero(n){
    if(Number(n) >=1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

//Verificando se o número já está na lista ou não.
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//Verificando se é um número e se já está na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    
    num.value = ''  //apagar valores após enviados 
    num.focus()  //Voltar o foco para o seletor
}

function finalizar(){
    if(valores.length == 0){
         alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        //Vai analisar todos os valores e verificar qual o maior e qual o menor.
        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            soma += valores[pos]
            media += valores[pos]/total
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi  ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores é igua a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}
