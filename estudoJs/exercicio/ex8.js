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