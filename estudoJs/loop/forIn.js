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