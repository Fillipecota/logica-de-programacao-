import leia from "readline-sync"

var cliente1 = leia.question("DIGITE NOME CLIENTE 1: \n ")
var cliente2 = leia.question("DIGITE NOME CLIENTE 2: \n ")
var valorComp1 = leia.questionFloat("DIGITE O VALOR GASTO DO PRIMEIRO CLIENTE: \n ")
var valorComp2 = leia.questionFloat("DIGITE O VALOR GASTO DO SEGUNDO CLIENTE: \n ") 
var ValorTotal = valorComp1 + valorComp2
var Media =  ValorTotal / 2


console.log(cliente1 + "\n" +  valorComp1)
console.log(cliente2 + "\n" +  valorComp2)
console.log("VALOR TOTAL DA COMPRA FOI " + ValorTotal)
console.log(Media)

if(valorComp1 > 20 ){
    console.log("GASTOU MAIS DE 20 REAIS: \n " + cliente1)
}

if (valorComp2 > 20){
    console.log("GASTOU MAIS DE 20 REIAS: \n " + cliente2)
}



// operadores tenarios 
// var clientes = (ValorComp1 > 20) ? cliente1 + "\n" : "";
//clientes += (ValorComp2 > 20) ?  cliente2 + "\n" : "";
// console.log(clientes);
