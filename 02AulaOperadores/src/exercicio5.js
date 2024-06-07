import leia from "readline-sync"

var cliete1 = leia.question("DIGITE NOME CLIENTE 1: ")
var cliete2 = leia.question("DIGITE NOME CLIENTE 2: ")
var valorComp1 = leia.questionFloat("DIGITE O VALOR GASTO DO PRIMEIRO CLIENTE: ")
var valorComp2 = leia.questionFloat("DIGITE O VALOR GASTO DO SEGUNDO CLIENTE: ") 
var ValorTotal = valorComp1 + valorComp2
var Media =  ValorTotal / 2


console.log(cliete1+  valorComp1)
console.log(cliete2 +  valorComp2)
console.log("VALOR TOTAL DA COMPRA FOI " + ValorTotal)
console.log(Media)

if(valorComp1 > 20 ){
    console.log("GASTOU MAIS DE 20 REAIS: " + cliete1)
}

if (valorComp2 > 20){
    console.log("GASTOU MAIS DE 20 REIAS: " + cliete2)
}

