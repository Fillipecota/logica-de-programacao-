import leia, { questionInt } from "readline-sync"

var idade = leia.questionInt("INFORME SUA IDADE \n ")

if (idade < 18){
    var permissao = leia.question("SEUS PAIS PERMITIRAM A VIAGEM \n 1 - SIM \n 2 -NAO")
    if (permissao === "1"){
        var nome = leia.question("INFORME O NOME")
        console.log(" VOCE PODE VIAJAR TRAQUILO " + nome)
    }else if (permissao === "2"){
        console.log(" NÃO TEM PERMISSAO PRA VIAJAR")
     }else{
        console.log("OPCAO INVALIDA")
    }
}else{
    var nome = leia.question("INFORME SEU NOME: ")
    console.log("VOCE PODE VIAJAR TRAQUILO " + nome)
}