import leia from "readline-sync"

var QuantidadeMaça = leia.questionInt("DIGITE QUANTIDADE DE MAÇA: ")

if (QuantidadeMaça <= 12 ){
    console.log("total: " + QuantidadeMaça * 0.30 + "reais")
}else{
    console.log("total: " + QuantidadeMaça * 0.25 + "reais")
}
