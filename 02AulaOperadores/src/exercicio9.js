import leia, { questionInt } from "readline-sync"

var funcionario = leia.question("DIGITE SEU NOME \n")
var salario = leia.questionFloat("DIGITE SEU SALARIO \n")
var depedente = questionInt (" DIGITE QUANTIDADE DE DEPEDENTE \n")

switch (depedente) {
    case 0:
        var total = salario + (salario * 0.02)
       console.log(funcionario + " GANHA: " + total) 
        break;
    case 1:
        var total = salario + (salario * 0.05)
        console.log( funcionario + " GANHA: " + total)
        break
    case 2:
        var total = salario + (salario * 0.07)
        console.log( funcionario + " GANHA: " + total)
        break
    case 3: 
        var total = salario + (salario * 0.10) 
        console.log( funcionario + " GANHA: " + total)
        break
    case 4:
        var total = salario ( salario * 0.15)
        console.log( funcionario + " GANHA: " + total)
        break
    default:
        console.log("FUNCIONARIO NAO ENCONTRADO")
        break;
}