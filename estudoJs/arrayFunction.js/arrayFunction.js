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
