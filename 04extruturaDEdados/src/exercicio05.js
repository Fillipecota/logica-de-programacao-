import leia, { questionInt } from "readline-sync"

var lista = []
var i = 10

while (i > 0) {
    lista[i] = leia.questionInt("DIGITE OS NUMERO: ")
    i--
}
console.log(lista)
