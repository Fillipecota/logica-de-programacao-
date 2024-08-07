import leia from "readline-sync"

export function exercicio02() {

    function preencherVetor(tamanhoVetor, min, max) {
        var vetor = [];
        for (var i = 0; i < tamanhoVetor; i++) {
            vetor[i] = parseInt(Math.random() * (max - min)) + min
        }
        return vetor;
    }

    var vetor = preencherVetor(10, 0, 50);

    function verificaDuplicidade(vetor) {
        for (var i = 0; i < vetor.length; i++) {
            for (var j = i; j < vetor.length; j++) {
                if (j !== i && vetor[i] === vetor[i]) {
                    return true;
                }
            }
        }
        return false;
    }

    var temDuplicidade = verificaDuplicidade(vetor);
    if (temDuplicidade) {
        console.log("TEM DUPLICIDADE")
    } else {
        console.log("NÃO TEM DUPLICIDADE")
    }
}