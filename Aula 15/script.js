function Calcular() {
var começo = document.getElementById('com')
var fim = document.getElementById('fim')
var pulo= document.getElementById('pul')
var res = document.getElementById('res')
if(começo.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0){
    window.alert('Faltou colocar dados.')
    res.innerHTML = `Impossivel contar.`
}else{
    res.innerHTML = `Contando: `
    var c = Number(começo.value)
    var f = Number(fim.value)
    var p = Number(pulo.value)
    if(p <= 0){
        window.alert('Passo inválido')
        p= 1

    }
    if(c < f){
        for (let r = c; r <= f; r = r + p){
        res.innerHTML += `${r}  👉🏻  `
    }
    } else {
        for(let r = c; r >= f; r = r - p){
        res.innerHTML += `${r} 👉🏻 `
    }
    }
        res.innerHTML +=  `🎯`
}
    
}


    
