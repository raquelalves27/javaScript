//2. While loop
//necessario declarar a variavel i fora do loop
//verifica primeiro e depois executa
let i = 1
while (i <= 5 ) {
    if(i % 2 !== 1) {
        console.log(i + " é par - usando o while")
    }
    i++
}

//3. Do While
//tb tem que declarar a variavel i fora 
//executa primeiro uma vez e depois verifica
let n = 1
do {
    console.log("digitando", n)
    n++
} while (n <= 10)