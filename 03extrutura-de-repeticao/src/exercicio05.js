import leia from "readline-sync"

var valorXerox = 0.33
var copia = 1
 
while (copia <= 500) {
    console.log( copia + " = " + valorXerox.toFixed(2) )
    copia++
    valorXerox += 0.33
    
}