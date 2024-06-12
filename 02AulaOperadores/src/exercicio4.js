import leia from "readline-sync"

var QuantidadeMaca = leia.questionInt("DIGITE QUANTIDADE DE MACA: ")

if (QuantidadeMaca <= 12 ){
    console.log("total: " + QuantidadeMaca * 0.30 + "reais")
}else{
    console.log("total: " + QuantidadeMaca * 0.25 + "reais")
}
