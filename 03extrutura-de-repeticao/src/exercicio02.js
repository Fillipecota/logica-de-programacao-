import leia from "readline-sync"

var inic = 0
var numero = leia.questionInt("DIGITE UM VALOR: ")

while (inic <= numero) {
    console.log(numero)
    numero--
}