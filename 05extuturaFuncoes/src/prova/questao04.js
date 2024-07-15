import leia from "readline-sync"

var jogador = 0
var gol = 0
var numPassCert = 0
var passErradp = 0
var nota =0
var notaFinal=0
var melhorjogador

for (var i = 0; i < 2; i++) {
    jogador = leia.question("DIGITE O NOME DO JOGADOR: ")
    gol = leia.questionInt("DIGITE A QUANTIDADE DE GOL DO JOGADOR: ")
    numPassCert = leia.questionInt("DIGITE QUANTIDADE DE PASSO CERTO: ")
    passErradp = leia.questionInt("DIGITE A QUANTIDADE DE PASSO ERRADOS: ")

}

for (var i = 0; i < jogador.length; i++) {
    nota = (gol * 50) + (numPassCert * 10) -(passErradp * -5)

    if (!notaFinal || nota > notaFinal) {
        notaFinal = nota
        melhorjogador = jogador
    }


}
console.log("MELHOR JOGADOR É: " + melhorjogador + "COM " + notaFinal + " pontos")