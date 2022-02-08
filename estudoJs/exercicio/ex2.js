//exercio 2
//escrever uma função que usa dois numeros e retorna o maior entre eles
let valorMaior = maior(1,2)
console.log(valorMaior)
    function maior(n1,n2) {
        if (n1 > n2)
        return n1
        else return n2
    }

let d = 2
let e = 4

function numeroMaior() {
    if (d > e) {
        return console.log("O numero maior é " + d)
    } else {
        return console.log("O numero maior é " + e)
    }
}
numeroMaior()

// mais facil
function max(d,e) {
  return d > e ? d : e
}