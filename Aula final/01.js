let eu = {nome:`Rafael`, idade:`17`, peso: 57 ,engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
eu.engordar(2)
console.log (`Seu nome é ${eu.nome} e ele pesa ${eu.peso} `)