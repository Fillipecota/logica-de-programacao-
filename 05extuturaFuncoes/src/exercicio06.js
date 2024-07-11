import leia from "readline-sync"

export function exercicio06() {
    var gabarito = []
    var respotaProva = []
    var nota = 0
    for (var i = 0; i < 10; i++) {
        gabarito[i] = leia.question("INFORME A RESPOSTA DA QUESTÃO: " + (i + 1));
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