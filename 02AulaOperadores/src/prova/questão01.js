import leia from "readline-sync"

var valorProduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO \n")

if(valorProduto < 20.00) {
    var valorTotal = valorProduto + (valorProduto * 0.45)
    console.log("O VALOR VAI CUSTAR \n " + valorTotal )
}else{
    var valorTotal = valorProduto + (valorProduto * 0.30)
    console.log(" O VALOR VAI CUSTAR \n" + valorTotal)
}