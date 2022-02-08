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