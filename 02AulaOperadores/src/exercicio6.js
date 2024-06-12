import leia from "readline-sync"

var valorProduto = leia.questionFloat("informe o valor do produto ")

var umReal =  leia.questionInt("QUANTIDADE DE MOEDAS R$1 \n ")
var cinquenta =  leia.questionInt("QUANTIDADE DE MOEDAS R$0,50 \n")
var vinteCinco =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.25 \n")
var dez =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.10 \n ")
var cinco =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.05 \n"  )

var total = (umReal *1) + (cinquenta *0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco *0.05)

console.log("TOTAL ACUMULADO \n" + total)
console.log(" VALOR DO PRODUTO \n" + valorProduto)

if (total >= valorProduto){
    console.log("DEU BOA")
}else{
    console.log( " DEU RUIM")
}

//var messagem = total >= valorProduto ? "DEU BOA" : "DEU RUIM" ;
//console.log( messagem );