import leia from "readline-sync"


var lista = []
var lista2 = []

for (var i = 0; i <10; i++){
    lista[i]=leia.questionInt("DIGITE UM NUMERO: ")
}
for (var j=0; j < 10; j++){
  if (lista[j] % 2 ===0){
 lista2.push(lista[j])
  }
}
console.log(lista2)