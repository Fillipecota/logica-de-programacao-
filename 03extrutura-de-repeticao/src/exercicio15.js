import leia from "readline-sync"

var decimal = leia.questionInt("DIGITE O DECIMAL: ")
var binario =""



    while (decimal>0){
        var resultado= parseInt(decimal/2)
        var resto = decimal %2
        binario = resto+ binario
        decimal = resultado
    }
console.log(binario)





