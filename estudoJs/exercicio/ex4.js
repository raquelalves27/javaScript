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
