import leia from "readline-sync"

//const leia = require("readline-sync")

var nome = leia.prompt();

console.log("HELLO WORLD " + nome)

var corrida1 = leia.questionFloat ("DIGITE O VALOR DA PRIMEIRA CORRIDA: ");

var corrida2 = leia.questionFloat ("DIGITE O VALOR DA SEGUNDA CORRIDA: ");

var corrida3 = leia.questionFloat ("DIGITE O VALOR DA TERCEIRA CORRIDA: ");

var corrida4 = leia. questionFloat ("DIGITE O VALOR DA QUARTA CORRIDA: ");

var corrida5 = leia.questionFloat (" DIGITE O VALOR DA QUINTA CORRIDA: ");

var valorbruto = corrida1 + corrida2 + corrida3 + corrida4 + corrida5;

var total = valorbruto - (valorbruto * 0.25);








console.log( " total: " + total);

