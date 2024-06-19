import leia from "readline-sync"

var nota1 = leia.questionFloat("DIGITE A PRIMEIRA NOTA \n")
var peso1 = leia.questionFloat("DIGITE O PESO DA NOTA 1 \n")
var nota2 = leia.questionFloat("DIGITE A SEGUNDA NOTA \n")
var peso2 = leia.questionFloat("DIGITE O PESO DA NOTA 2 \n")
var nota3 = leia.questionFloat("DIGITE A TERCEIRA NOTA \n")
var peso3 = leia.questionFloat("DIGITE O PESO DA NOTA 3 \n")
var Media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
console.log(" MEDIA \n" + Media)