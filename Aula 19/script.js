var num = document.getElementById('num')
var res = document.getElementById('res')
var valores = []
var r = document.getElementById('resposta')

function Add(){
    var n = Number(num.value)
   if(num.value.length == 0 ){
    window.alert('Preencha o campo acima.')
    
   }else{
    if(n < 0 || n > 100){
        alert('O valor não corresponde ao pedido.')

    }else{
    valores.push (n)    
    var dados = document.createElement('option')
    dados.text += `O valor recebido é ${n}`
    res.appendChild(dados)
    r.innerHTML = ``
    }
}
    num.value = ``
    num.focus()
}
function Somar(){
   if(valores.length == 0){
    alert('Sem dados para calcular')
   }else{
    var total = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var média = 0
    for(var pos in valores){
        média += valores[pos] / total
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]

    }
    r.innerHTML = ``
    r.innerHTML += `<p>O total de número adicionados é ${total} </p>`
    r.innerHTML += `<p> O maior valor é ${maior} </p>`
    r.innerHTML += `<p> O menor valor é ${menor}</p>`
    r.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    r.innerHTML += `<p>A média é ${média} </p>`
   }
    


} 