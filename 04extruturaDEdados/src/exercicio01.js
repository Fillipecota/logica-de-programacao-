import leia from"readline-sync"

var lista = []
var lista2 = []

for(var i = 0; i < 10; i++){
    lista[i]= leia.question("DIGITE UM NUMERO: ")
}
for ( var j = 0 ; j < lista.length ; j++){
  lista2[j] = lista[j]* 5
    
}

console.log(lista2)
