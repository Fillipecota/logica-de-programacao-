import leia from "readline-sync"

export function geitoExercicio06() {
    var opcao = ["A", "B", "C", "D", "E"];
    var gabarito = []
    var respotaProva = []
    var nota = 0

    for (var i = 0; i < 10; i++) {
        var index = parseInt(Math.random() * 5);
        gabarito[i] = opcao[index]
    }

    for (var i = 0; i < 10; i++) {
        respotaProva[i] = leia.question("INFORME A RESPOSTA DA QUESTÃO: " + (i + 1));
    }

    for (var i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respotaProva[i]) {
            nota++;
        }
    }

    console.table(gabarito)
    console.table(respotaProva)
    console.log(nota)
}