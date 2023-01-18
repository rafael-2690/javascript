function verificar() {
    var data = new Date()
    var agora = data.getFullYear()
    var ano = document.getElementById('num')
    var res = document.getElementById('res')
    if (ano.value.length == 0 ){    
        window.alert('Verifique os dados fornecidos')
    }else{
        var sexo= document.getElementsByName('sexo')
        var idade = agora - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade <=3 ){
                img.src = 'bebe.png'
                
            
            }else if  (idade > 3 && idade <= 9 ){
                img.src = 'crianço.png'

            }else if (idade > 9 && idade <= 49){    
                img.src = 'homem.png'

            }else if (idade > 49 ){
                img.src = 'velho.png'

            }else {
                window.alert ('Verifique os dados fornecidos')

            }

        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <=3 ){
               img.src = 'beba.png'
            
            }else if  (idade > 3 && idade <= 9 ){
                img.src = 'criança.png'

            }else if (idade > 9 && idade <= 49){
                img.src = 'mulher.png'

            }else if (idade > 49 ){
                img.src = 'velha.png'

            }else {
                window.alert ('Verifique os dados fornecidos')

            }
        }
        
        res.innerHTML = `Detectanos ${genero} com ${idade} anos.`
        
        res.appendChild(img)
           
    }

 
}