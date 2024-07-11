import { preencherVetor } from "./utils/preencherVetor.js";

export function exercicio05() {
    var jogadas = preencherVetor(1000, 1, 7);
    var valor = [0, 0, 0, 0, 0, 0, 0];
    var porcetLados = []

    for (var i = 0; i < jogadas.length; i++) {
        valor[jogadas[i]]++;
    }

    for (var i = 1; i < jogadas.length; i++) {
        porcetLados[i] = 100 / jogadas.length * valor[i];
    }
    for (var i = 1; i < porcetLados.length; i++) {
        if (porcetLados[i] > 22) {
            console.log("DADO VICIADO!!!!")
        }

    }
    console.table(porcetLados)
}