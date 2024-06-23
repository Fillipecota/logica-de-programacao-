import leia from "readline-sync"

var num = leia.questionInt("DIGITE UM NUMERO: ")
var mult = 1

while (mult <= 10) {
    console.log(num + " x " + mult + " = " + mult * num)
    mult++
}
