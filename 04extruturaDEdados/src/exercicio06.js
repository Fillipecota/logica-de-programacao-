import leia from "readline-sync"

var lista = []
var listaMaior = []
var listaMenor = []


for (var i = 0; i < 30; i++){
    var um = parseInt(Math.random()* 23) +12
    var dois = parseInt(Math.random()* 23) + 12

    if ( um > dois){
         listaMaior[i] = um 
         listaMenor[i] = dois
    }else{
         listaMaior[i] = dois
         listaMenor[i] = um
    }
}
console.log("VETOR MINIMA SÃO: " + listaMenor)
console.log("VETOR MAXIMOS SÃO: " + listaMaior)