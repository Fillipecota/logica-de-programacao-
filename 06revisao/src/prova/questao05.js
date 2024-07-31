import leia from "readline-sync"

var verde = 0
var preto = 0
var vermelhor = 0

for (var i = 0; i < 20; i++) {
    var numeroRoleta = leia.questionInt(parseInt(Math.random() * 36))


    if (numeroRoleta = 0) {
        verde++
    }
    else if (numeroRoleta % 2 === 0) {
        preto++
    }

    else {
        vermelhor++
    }
}
console.log("verde: " + verde)
console.log("preto: " + preto)
console.log("vermelhor: " + vermelhor)
