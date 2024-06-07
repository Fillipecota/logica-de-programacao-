import leia from "readline-sync"

var NumeroReal = leia.questionInt("DIGITE UM NUMERO: ")
var NumeroCal = NumeroReal % 2

if (NumeroCal === 0 ){
    console.log("NUMERO É PAR")
} else{
  //  console.log ("NUMERO É IMPAR")
}
