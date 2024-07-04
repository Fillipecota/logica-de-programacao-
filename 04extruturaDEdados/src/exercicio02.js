import leia from "readline-sync"

var lista = []
var lista02 = 0

for(var i = 0; i < 5; i++){
    lista[i] =leia.questionInt("DIGITE UM NUMERO: " )
    lista02 = lista02 + lista[i] 
}

console.log( lista02)