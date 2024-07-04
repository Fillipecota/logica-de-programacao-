import leia from "readline-sync"

var listapAI = []
var listaMae = []
var listaFilho = []


for (var i = 0; i < 50; i++) {
    listapAI[i] = parseInt(Math.random() * 50)
    listaMae[i] = parseInt(Math.random() * 50)
}

for (var i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        listaFilho.push(listapAI[i])
    } else {
        listaFilho.push(listaMae[i])
    }
}

console.log(listaFilho)
