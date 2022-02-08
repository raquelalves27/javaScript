console.log("Bem-vindo ao cruso.")
// Variaveis 
let idade = 10
console.log(typeof idade)

// let  deixa possivel redefinir o valor quantas vezes for necessario

//Não pode redefinir o valor das variaveis
//const é mais ultimizado

//let nome = 'Raquel' //vaiavel do tipo string 
//let idade = 49 //variavel do tipo number
//if and  else, //variavel do tipo boolean
//let sobrenome  // variavel do tipo undefined
// null redefinir um valor 

// revela o tipo de variavel no console = typeof

//array e function 
//objetos // variaveis juntas em um lugar so que podemos acessar chamando um nome so 

let pessoa = {
    nome: "Raquel",
    idade: 49, 
    sobrenome: "alves"
}
let cadastroPessoa = {
    matricula: 799878,
    nome: "José",
    sobrenome: "alves"

}
let itensObrigatorios = {
    email: true,
    nome: true,
    endereco: false
}
console.log(pessoa)
console.log(cadastroPessoa)
console.log(itensObrigatorios)

//array onde posso guardar outros objetos e tb novas informações
let cadastro = [pessoa, cadastroPessoa, itensObrigatorios]
console.log(cadastro)

//array 
let familia = [12,"jonatan",56,78]
console.log(familia.length) // quantas propriedades existem no array
console.log(familia[1])

let nomeColega = ["Dominike",18,"Fortaleza"]
console.log(nomeColega)

//função 
//verbo + substantivo 

//ex. 1
let nome ="Jurubeba"
function mudarNome(id){
    nome = "";
}
console.log(nome)
mudarNome()//redefinindo variavel
// dentro do parenteses são parametros
console.log(nome)

//ex. 2
let matricula = 46575
function resetaMatricula(id) {
    matricula = id 
}
resetaMatricula("005000")
console.log(matricula)

//ex.3
let corSite = "blue"
function resetarCor(cor, tonalidade) {//adicionando mais funções
    corSite = cor + tonalidade //atribuindo 
}
console.log(corSite)
resetarCor("pink", " ligth")//redefinindo variavel
// variavel deixa de ser blue e passa a ser pink
//definindo valor de tonalidade
console.log(corSite)
//resetarCor()//redefinindo variavel
// detro do parenteses são parametros

let identificacao = "pai"
function atribuirCadastro(parentesco, nome) {
    identificacao = parentesco +" "+ nome
}
console.log(identificacao)
atribuirCadastro("figura paterna:" , "Marcos")
console.log(identificacao)

//tipos de funções
// realiza uma tarefa e não devolve nada
function dizerNome(){
    console.log("Raquel")
}
dizerNome() //chamando a função

//faz um calculo ou operação e retorna algo 
function multiplicarPorDois(valor) {
    return valor * 2
}
console.log(multiplicarPorDois(3))

let resultado = multiplicarPorDois(2)
console.log(resultado)

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

//if e else 
//se a hora estiver entre as 06:00 ate 12:00, exibir Bom dia!
//se estiver entre 12:00 ate 18:00, exibir Boa Tarde!
//caso contrario, exibir Boa noite 


//if (condição) {
//     codigo a ser executado
//} else if {
//     codigo a ser executado
//} else {
//     codigo a ser executado
//}

let hora = 20

if (hora>6 && hora<12){
    console.log("Bom dia!")
} else if (hora>12 && hora<18) {
    console.log("Boa Tarde")
} else {
    console.log("Boa noite!")
}
//Swithe e case
//switch (permissão) {
//     case " " : 
//    break
//    default:
//}
//
//ex. 1
let permissao //comum, gerente, diretor 
permissao = "Raquel"

switch(permissao) {
    case "comum" :
        console.log("Usuario Comum")
        break
    case "gerente" :
        console.log("Usuario Gerente")
        break
    case "diretor" :
        console.log("Usuario Diretor")
        break
    default:
        console.log("Usuario Não Reconhecido!")
}
//loop
//1.For - fazer ate chegar na condição indicada
// i vem de indice
for (let i = 1; i <= 5; i++) { //executa incrementa.
    //   i = 0, 0 é menor que 5 ? Então executar ou não, quando executado somar +1 ate i ser igual a 5 
        console.log("Estou Aprendendo", i)
    }
    
    // ex. for, somente com valores impares
    for (let i = 1; i <= 5; i++) {
        if(i % 2 !== 0) {
          // % atribuição de resto    !== diferente
          //o restante da divisão de i com o 2 for diferente de 0, então mostrar i
          console.log(i + " é impar! - usando o for")
        }
    }

//2. While loop
//necessario declarar a variavel i fora do loop
//verifica primeiro e depois executa
let i = 1
while (i <= 5 ) {
    if(i % 2 !== 1) {
        console.log(i + " é par - usando o while")
    }
    i++
}

//3. Do While
//tb tem que declarar a variavel i fora 
//executa primeiro uma vez e depois verifica
let n = 1
do {
    console.log("digitando", n)
    n++
} while (n <= 10)

//4. For In
//para propriedades de um objeto ou elementos de um array 
 //objeto
 const pessoaForin = {
    nome: "Raquel",
    //nome é o key e Raquel é o value
    idade: 17
 }
 //key-value
 for(let key in pessoaForin) {
     console.log(key,pessoaForin.nome)
 }

 //array
 const cores = ["vermelho", "azul", "rosa"]

 for(let indice in cores) {
     console.log(indice,cores[indice])
 }

 //5. For Off
 for (let cor of cores) {
     console.log(cor)
 }

const estagiarios = ["Raquel", "Dominike", "Dudu", "Guilherme","Marilia", "Janio", "Poc", "Radigia"]
for(let nome in estagiarios) {
    console.log(nome,estagiarios[nome])
}

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

//fizzBuzz
//compara alguns valores e tem um tipo de retorno baseado na entrada

//Divisivel por 3 - fizz
//divisivel por 5 - Buzz
//divisivel por 3 e 5 - fizzBuzz
// não divisivel por 3 e 5 - retorna o valor
//não é um numero

const resultado1 = fizzBuzz(12) // 11 = entrada 
console.log(resultado1)

function fizzBuzz(entrada) {
  if ( entrada % 3 === 0 && entrada % 5 === 0)
  return "fizzBuzz"
  if( typeof entrada !== "number")
  return "não é um numero"
  if (entrada % 3 === 0)
  return "fizz"
  if (entrada % 5 === 0)
  return "Buzz"
  
  return entrada
}

//medidor de velocidade
//medir velocidade e determinar quantos pontos vai receber de multa 
//velocidade maxima ate 70km
//a cada 5km a mais, um 1p na carteira
//math.floor() - arredonda o valor que sera recebido
//caso ponto maior que 12 -> "Carteira suspensa"
//muito bom 

verificarVelocidade(130)

function verificarVelocidade(velocidade){
  const velocidadeMaxima = 70
  const KmPorPonto = 5
     if (velocidade <= velocidadeMaxima) 
       console.log("ok")
      else {
       const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto)
       if (pontos >= 12 ) 
        console.log("carteira suspensa")
       else 
         console.log("pontos recebidos: ", pontos)
     }
}

//receber uma quantidade de valores para avaliar 
//função exibe se cada valor é par ou impar
VerificarTipo(10)

function VerificarTipo (limite) {
  let i = 0
while (i <= limite) {
  if(i % 2 !== 1) {
    console.log(i +" é par")
  } if (i % 2 !== 0) {
     console.log(i +" é impar")
  }
  i++
}
}
//ler propriedades dentro de um objeto
//Criar um metodo para ler propriedades de um objeto
//exibir somente as propriedades do tipo string que estão nesse objeto


let pessoa2022 = {
    nome: "Raquel",
    cargo: "Estgiario",
    idade: 17,
    id: 1234
}
let funcionario = pessoa2022

exibirString(funcionario) 

function exibirString(key) {
  for (value in key) 
  //o valor dentro da chave
  if(typeof key[value] === "string") {
    console.log(value,key[value])
  }
}
//criar função de soma que retorna 
// soma de todos os multiplos de 3 e de 5

somar(10)
function somar(limite) {
    let multiploDe3 = 0
    let multiploDe5 = 0
    let i = 0

  while (i <= limite) {
    if(i % 3 === 0) {
      multiploDe3 += i

    } if (i % 5 === 0) {
     multiploDe5 += i
    }
    i++
  }
  console.log(multiploDe3 + multiploDe5)
}

//media de nota escolar 
let notas = [10, 6, 7, 10] 
for(let n in notas)
console.log(n,notas[n])

//obtendo media
const array = [10,7,3,6]
console.log("a media do aluno é " + mediaDoAluno(array))

const media = mediaDoAluno(notas)

function mediaDoAluno(array) {
  let soma = 0 
  for (let valor of array) {
    soma += valor
  }
  return soma /(array.length)
}

