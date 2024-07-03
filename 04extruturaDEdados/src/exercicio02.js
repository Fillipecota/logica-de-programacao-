import leia from "readline-sync"

var lista = []
var lista02 = []

for(var i = 0; i < 5; i++){
    lista[i] =leia.question("DIGITE UM NUMERO: " )
}

for(var j = 0; j < 5; j++){
    lista02 = lista02 + lista[j]
}