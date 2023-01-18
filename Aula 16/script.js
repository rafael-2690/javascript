function Multiplicar(){
    var n = document.getElementById('num')
    var res = document.getElementById('res')
    if(n.value.length == 0)    {
        window.alert('Faltou preencher dados.')

    }else {
        var n = Number(n.value)
        res.innerHTML = ``
        for(var r = 1; r<= 10; r = r+1 ){    
        var item = document.createElement('option') 
        item.text += `${n} x ${r} = ${n*r}`
        item.value = `res${r}`
        res.appendChild(item)
       
        }

    }
}

