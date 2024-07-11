import { preencherVetor } from "./utils/preencherVetor.js";

export function geitoExercicio04() {
    var matriz = [[]];
    var maioresQueDez = [];
    for (var linha = 0; linha < 8; linha++) {
        matriz[linha] = preencherVetor(8, 0, 100)
        for (var coluna = 0; coluna < 8; coluna++) {
            if (matriz[linha][coluna] > 10) {
                maioresQueDez.push(matriz[linha][coluna]);

            }
        }
    }
}