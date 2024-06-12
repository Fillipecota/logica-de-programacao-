import leia from "readline-sync"

var mes = leia.questionInt("DIGITE O NUMERO DO MES \n")


switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(" ESSE MES TEM 31 DIAS")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(" ESSE MES TEM 30 DIAS")
    case 2:
        console.log("DEPENDE DO ANO TEM 28 OU 29 DIAS")
    default:
        console.log( " MES INVALIDO")
        break;
}