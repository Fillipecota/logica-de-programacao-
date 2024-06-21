import leia from"readline-sync"

var inic = 0
var numero = leia.questionInt("DIGITE UM NUMERO: ")

while (inic <= numero ) {
    console.log(inic)
    inic++
}