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
