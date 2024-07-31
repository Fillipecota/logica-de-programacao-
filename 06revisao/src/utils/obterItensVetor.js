export function obterItensVetor(vetor, vResultado, min, max) {
    for (i = min; i <= max; i++) {
        vResultado[i] = vetor[i];
    }
    return vResultado;
}