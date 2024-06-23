import leia from "readline-sync"

var n1 = leia.questionInt("digite primeiro numero: ");
var n2 = leia.questionInt("digite segundo numero: ");
var passo = leia.questionInt("numero de passos");

while(n1 <= n2){
    console.log(n1);
    n1+= passo;
}

for(var i = n1; i<= n2; i += passo){
    console.log(i);
}