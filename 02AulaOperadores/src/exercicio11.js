import leia, { questionInt } from "readline-sync"

var timeA = leia.questionInt("INFORME QTD GOLS TIME A \n")
var timeB = leia.questionInt(" INFOME QTD GOLS TIME B \n")

var diferenca = Math.abs(timeA - timeB);

switch (diferenca) {
    case 0:
        console.log("EMPATE")    
        break;
    case 1:
    case 2:
    case 3:
        console.log("jogo normal")
        break
    default:
        console.log("GOLEADA")
        break;
}