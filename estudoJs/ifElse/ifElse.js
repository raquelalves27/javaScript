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