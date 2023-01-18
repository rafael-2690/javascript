let n = [2,1,3,4]
n[4] = 5 
n.push(6)
n.length
//n.sort() deixa na ordem numerica
console.log(`Nosso valor é ${n.length}`)
console.log(`O da segunda casa é ${n[1]}`)
let p = n.indexOf(8)
if(p == -1){
    console.log('O valor não existe')
}else{
    console.log (p) 
}
