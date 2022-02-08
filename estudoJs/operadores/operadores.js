//operadores
//operadores aritimeticos(matematicos) + - * /
let salario = 100
console.log(salario + salario)
console.log(salario - salario)

//operadores de incremento ++ --
console.log(++salario) //+1
console.log(--salario) //-1

//operadores de atribuição
let valorDeMacarrao = 2.30
valorDeMacarrao += valorDeMacarrao 
console.log(valorDeMacarrao) 

//operadores de igualdade
//igualdade estrita
console.log(1===1) // mesmo resultado e mesmo tipo = true
console.log(1==="1") // mesmo resultado mas nn mesmo tipo = false

//igualdade solta
console.log("1"==1) //não olha o tipo, somente o resultado
 
//operador ternario
//operadores de comparação 
//um cliente, que tem mais de 100p = premium caso contrario = comum
let pontos = 101
let tipo = pontos >= 100 ? "premium" : "comum"
// se pontos for maior ou igual a 100 o cliente vai ser premium, se não ele é comun
console.log(tipo)

let orcamento = 9
let limite = orcamento <= 109 ? "Você está dentro do orçamento" : "Você está fora do orçamento"
console.log(limite)

//operadores logicos
//tomar decisões baseadas em condições multiplas.
//and, or, not
// and (&&) - retorna TRUE se os dois operadores forem TRUE
console.log(true && true)
//imaginando que existe uma pessoa que so pode aplicar a uma vaga de trabalo se for maior que 18 anos e tiver carteira de trabalho
let maiorDeIdade = true
let PossuirCLT= true
let podeAplicar = maiorDeIdade && PossuirCLT
console.log(podeAplicar)

// or (||)
//retorna true se um dos operandos forem true
console.log(false||true)

//imagiando que existe uma pessoa que para votar precisa da identidade ou da CNH
let identidade = true
let CNH = true
let podeVotar = identidade || CNH
console.log("pode votar: ",podeVotar)

//not (!) 
let naoVota = !podeVotar
//o candidato não vota se a variavel podeVotar retornar false
console.log("não vota: ",naoVota)

//comparação logica não boleano
//Falsy são valores que 
//undefined
//null
//0
//false
//" "
//NaN


//exercicio  - Trocar Valor
let a = "vermelho"
let b = "azul"

console.log(a)
console.log(b)

function TrocarCor(color) {
    a = color
    a = b
    b = color
}
TrocarCor(a, b)
console.log(a)
console.log(b)
