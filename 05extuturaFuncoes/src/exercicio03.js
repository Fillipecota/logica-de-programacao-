import leia from "readline-sync"

export function exercicio03() {

    var vetor = []

    for (var i = 0; i < 4; i++) {
        var numeroDigitado = leia.questionInt("DIGITE UM NUMERO PAR: ");
        while (numeroDigitado % 2 !== 0) {
            numeroDigitado = leia.questionInt("NUMERO" + numeroDigitado + "IMPAR, DIGITE UM NUMERO PAR: ");
        }
        vetor[i] = numeroDigitado;
    }
    console.log(vetor);
}