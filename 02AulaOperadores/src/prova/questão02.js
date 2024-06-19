import leia from "readline-sync"


var qtdhora = leia.questionFloat("DIGITA QUANTIDADES DAS HORAS TRABALHADAS \n")
var valorHora = leia.questionFloat("DIGITE O VALOR DAS HORAS \n ")
var PercDesconto = leia.questionFloat("DIGITE O PERCENTUAL DO DESCONTO \n")
var valorBruto = valorHora * qtdhora
var PercDescot = PercDesconto / 100
var valorDesc= valorBruto * PercDescot
var valorLiquido = valorBruto - valorDesc


console.log( "SALARIO LIQUIDO \n" + valorLiquido)
console.log("DESCONTO \n " + valorDesc)
console.log(" SALARIO BRUTO \n" + valorBruto) 