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