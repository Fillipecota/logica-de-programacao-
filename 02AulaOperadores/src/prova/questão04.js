import leia from "readline-sync"

var notaFinal = leia.questionFloat("DIGITE NOTA FINAL \n")

if(notaFinal >10 || notaFinal < 0){
    console.log("NOTA IVALIDA!")
}else if(notaFinal < 6){
    console.log("tirou F")
}else if (notaFinal == 6 || notaFinal < 7){
    console.log("tirou D")
}else if (notaFinal == 7 || notaFinal < 8){
    console.log("tirou C")
}else if(notaFinal == 8 || notaFinal < 9){
    console.log("tirou B")
}else{
    console.log("tirou A")
}