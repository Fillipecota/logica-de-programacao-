import leia from "readline-sync"

var melhorJogador;
var melhorPontuacao;

for (var i = 0; i < 2; i++) {

    var nome = leia.question("INFORME O NOME DO JOGADOR: ")
    var qtdGols = leia.questionInt("INFORME A QTD GOLS: ")
    var qtdPc = leia.questionInt("INFORME A QTD DE PASSE CERTO: ")
    var qtdPe = leia.questionInt("INFORME A QTD DE PASSE ERRADO: ")

    var ponto = (qtdGols * 50) + (qtdPc * 10) + (qtdPe * -5)

    var obj = {
        nome: nome,
        gols: qtdGols,
        passeCerto: qtdPc,
        passseErrado: qtdPe,
        ponto: ponto
    }

    Time.push(obj)

    if (!melhorPontuacao || ponto > melhorPontuacao) {
        melhorJogador = nome;
        melhorPontuacao = ponto;
    }

    if (ponto < 50) {
        console.log(nome + " FEZ UMA PESSIMA PARTIDA")
    } else if (ponto >= 50 && ponto < 100) {
        console.log(nome + " FEZ UMA PARTIDA RUIM")
    } else if (ponto >= 100 && ponto < 150) {
        console.log(nome + " FEZ O BASICO")
    } else if (ponto >= 150 && ponto < 200) {
        console.log(nome + " FOI BEM NA PARTIDA")
    } else {
        console.log(nome + " JOGOU DEMAIS")
    }
}

console.log("O MELHOR JOGADOR FOI: " + melhorJogador + "  COM: " + melhorPontuacao);
console.log(obj)