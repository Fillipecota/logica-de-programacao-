import leia from "readline-sync"

var numero = 0

while (numero < 10) {
    console.log("HELLO WORLD " + numero);
    numero ++
}
console.log ( "O NUMERO PAROU NO: " + numero)



var estaCarregando = true
var porcentagem = 0


while (estaCarregando) {
    console.log(porcentagem + "% CARREGANDO")
    
    if (porcentagem < 100){
        porcentagem += 5
    }else{
        estaCarregando = false
    }

}


var nota = leia.questionFloat("DIGITE A NOTA: ")

while (nota < 0.0 || nota > 10.0) {
    console.log("NOTA INVALIDA")
    nota = leia.questionFloat("DIGITE A NOTA NOVAMENTE: ")
}
console.log("NOTA VALIDA")



// diferença entre for e while

var num = leia.questionInt("DIGITE UM NUMERO: ")
var mult = 1

while (mult <= 10) {
    console.log(num + " x " + mult + " = " + mult * num)
    mult++
}

var nume = leia.questionInt("DIGITE UM NUMERO: ")

for(var i = 1; i <= 10; i++ ){
console.log(nume + " x " + i + " = " + nume * i )
}


// diferença while e do while

var a = 0

while ( a <= 10) {
    console.log(a)
    a++
}

var b = 0

do {
    console.log(b)
    b++
} while (a < 10);

var n1 =leia.questionInt("DIGITE O PRIMEIRO NUMERO: ")
var n1 = leia.questionInt("DIGITE O SEGUNDO NUMERO: ")
var passo = leia.questionInt("NUMERO DE PASSOS: ")

while (n1 <= n2) {
    console.log(n1)
    n1+= passo
}

for ( var i = n1; i <= n2; i += passo){
    console.log(i)
}