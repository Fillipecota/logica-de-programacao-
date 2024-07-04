import leia, { questionInt } from "readline-sync"

var lista = []
var lista2 = []



 
for( var i = 0; i < 10; i++){
    lista.push(parseInt(Math.random()*30 ));
}

for(var i =lista.length-1; i >=0; i--){
    lista2.push(lista[i]);

}


console.log(lista)
lista = lista2
console.log(lista)


//----------------------------------------------------

//modo de inverter lista

var inicio = 0
var fim = lista.length -1
while(inicio < fim){
    var aux = lista[inicio];
    lista[inicio]= lista[fim];
    lista[fim] = aux;
}


//----------------------------------------------------