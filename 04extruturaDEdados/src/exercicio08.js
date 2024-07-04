import leia from "readline-sync"

var maior = 0
var menor = 0
var nota


for ( var i = 0; i < 6; i++){
    nota= leia.questionInt("DIGITE UMA NOTA: ")

    if ( maior && menor === 0){
        maior = nota
        menor = nota
    }
     else if (nota > maior){
        maior = nota
     }
     else if (nota < menor ){
        menor = nota
     }
}   
    console.log("nota maior é: " + maior)
    console.log("nota menor é: " + menor)