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