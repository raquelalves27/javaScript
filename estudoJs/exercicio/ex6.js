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