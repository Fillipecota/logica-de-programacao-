import leia, { questionInt } from "readline-sync"

var lista = []
var maior = []



for ( var i =  0; i < 15; i++){
    lista[i] = questionInt("DIGITE UM NUMERO: ")
   
    if(lista[i] >= 10){
        maior.push (lista[i])
    }
}
console.log(maior + " numero maior que 10")

