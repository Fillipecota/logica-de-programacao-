import leia from "readline-sync"

var decimal = leia.questionInt("DIGITE O DECIMAL: ")
var binario 

do {
    binario = decimal % 2

} while (binario === 0|| binario === 1);
    console.log( binario)

    
