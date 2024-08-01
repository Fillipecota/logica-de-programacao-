const TENTATIVAS = 1000
var index = 0;
var verde = 0;
var vermelho = 0;
var preto = 0;


while (index < TENTATIVAS) {
    var valorSorteado = parseInt(Math.random() * 37);


    if (valorSorteado === 0) {
        verde++;
    } else if (valorSorteado % 2 === 0) {
        preto++;
    } else {
        vermelho++;
    }
    index++;

}
var vermelhoPorcent = (vermelho / TENTATIVAS) * 100
var verdePorcent = (verde / TENTATIVAS) * 100
var pretoPorcent = (preto / TENTATIVAS) * 100

console.log("VERMELHO - QTD: " + vermelho + "  PORCENTAGEM: " + vermelhoPorcent.toFixed(1) + " %")
console.log("PRETO - QTD: " + preto + "  PORCENTAGEM: " + pretoPorcent.toFixed(1) + " %")
console.log("VERDE - QTD: " + verde + "  PORCENTAGEM: " + verdePorcent.toFixed(1) + " %")

var verdeEsperado = (1 / 37) * 100;
var outraEsperadas = (18 / 37) * 100;


if (verdePorcent > (verdeEsperado * 2) || vermelhoPorcent > (outraEsperadas * 1.2) || pretoPorcent > (outraEsperadas * 1.2)) {
    console.log(" PODE ESTAR VICIADO !!")
} else {
    console.log(" NÃO ESTA VICIADO !!")
}



//function calculaPorcentagem(vezesQueCaiu){
//    return ( vezesQueCaiu / TENTATIVAS)* 100;
//}


//function selecionaContador(valor){
//    valor === 0? verde++ : valor %2 === 0? preto : vermelho++;
//}