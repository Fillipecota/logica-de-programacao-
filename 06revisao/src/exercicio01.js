import leia from "readline-sync"

var a = leia.questionInt("INFORME O NUMERO 1: ");
var b = leia.questionInt("INFORME NUMERO 2: ");
var c = leia.questionInt("INFORME O NUMERO 3: ");

if (a < b && b < c) {
    console.log(a, b, c)

} else if (a < c && c < b) {
    console.log(a, c, b)

} else if (b < a && a < c) {
    console.log(b, a, c)

} else if (b < c && c < a) {
    console.log(b, c, a)

} else if (c < a && a < b) {
    console.log(c, a, b)

} else if (c < a && a < b) {
    console.log(c, a, b)

} else {

} console.log(c, b, a)

/////////////////////////
// outra forma //
var aux

if(a > b){
    aux = a;
    a = b
    b = aux;
}

if (a > c){
    aux = a
    a = c
    c = aux;
}

if ( b > c){
    aux = b
    b = c
    c = aux;
}

///////////////////
//outra forma//

var numero = [];

for (var o = 0; i < 3; i++){
    numero[i] = leia. questionInt("INFORME O NUMERO " + (i + 1) + ":")

}
var numeroOrdenado = numero.sort();

console.log(numeroOrdenado)
