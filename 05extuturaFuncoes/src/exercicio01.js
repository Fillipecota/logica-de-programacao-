import leia from "readline-sync"

export function exercicio01() {

    function preencherVetor(tamanhoVetor, min, max) {
        var vetor = [];
        for (var i = 0; i < tamanhoVetor; i++) {
            vetor[i] = parseInt(Math.random() * (max - min)) + min
        }
        return vetor;
    }

    function obterItensVetor(vetor, vResultado, min, max) {
        for (i = min; i <= max; i++) {
            vResultado[i] = vetor[i];
        }
        return vResultado;
    }
    var v1 = preencherVetor(9, 0, 100);
    var v2 = preencherVetor(9, 0, 100);
    var v3 = preencherVetor(9, 0, 100);

    var vResultado = []
    vResultado = obterItensVetor(v1, vResultado, 0, 2);
    vResultado = obterItensVetor(v2, vResultado, 3, 5);
    vResultado = obterItensVetor(v3, vResultado, 6, 8);

    console.log(v1)
    console.log(v2)
    console.log(v3)
    console.log(vResultado)
}
