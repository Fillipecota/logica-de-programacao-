import leia from "readline-sync"

var palavra = leia.question("DIGITE UMA PALAVRA: ")
var lista2 = "";


for (var i = palavra.length - 1; i >= 0; i--) {
    lista2 = lista2 + palavra[i]
}

if (stringinvertido === palavra) {
    console.log(" a palavra é palindromo")
} else {
    console.log("não é uma palavra palindromo")
}