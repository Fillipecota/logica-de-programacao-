import leia, { questionFloat } from "readline-sync"

var salario = leia.questionFloat(" DIGITE O SALARIO \n")
var salarioCalc = salario * 0.30
var valorEmprest = leia.questionFloat( "DIGITE O VALOR DO EMPRESTIMO \n ")
var parcela = leia.questionInt( " DIGITE EM QUANTAS VEZES QUER FAZER \n ")
var valorParcela =  valorEmprest / parcela

if (valorParcela >= salarioCalc) {
    console.log(" EMPRESTIMO NEGAGO")
}else{
    console.log("PARCELA FICOU \n " + valorParcela + " EM " + parcela)
}

