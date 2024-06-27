import leia from "readline-sync"

var vezes = leia.questionInt("DIGITE O VALOR: ")
var atual = 1
var anterio = 1
var proximo
var resultado = "1 - 1"

for(var i = 2; i <= vezes; i++ ){
    proximo = anterio + atual
    anterio = atual
    atual = proximo
    resultado = resultado + " - " + proximo
}
console.log(resultado)