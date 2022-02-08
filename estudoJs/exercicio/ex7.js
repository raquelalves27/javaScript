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
