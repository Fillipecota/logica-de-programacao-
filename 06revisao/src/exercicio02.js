import leia from "readline-sync"

var n1 = leia.questionInt("INFORME PRIMEIRA NOTA: ")
var n2 = leia.questionInt("INFORME SEGUNDA NOTA: ")
var n3 = leia.questionInt("INFORME TERCEIRA NOTA: ")
var n4 = leia.questionInt("INFORME QUARTA NOTA: ")
var n5 = leia.questionInt("INFORME QUINTA NOTA: ")
var n6 = leia.questionInt("INFORME SEXTA NOTA: ")

var maior = n1;
var menor = n1;

if (n2 > maior) { maior = n2 }
if (n3 > maior) { maior = n3 }
if (n4 > maior) { maior = n4 }
if (n5 > maior) { maior = n5 }
if (n6 > maior) { maior = n6 }


if (n2 > menor) { menor = n2 }
if (n3 > menor) { menor = n3 }
if (n4 > menor) { menor = n4 }
if (n5 > menor) { menor = n5 }
if (n6 > menor) { menor = n6 }

var soma = n1 + n2 + n3 + n4 + n5 + n6;
soma -= maior + menor;
var media = soma / 4;

console.log("MEDIA E: " + media);

///////////////////////////
/////outra forma///


var notas = []
for (var i = 0; i < 6; i++) {
    notas.push(leia.questionInt(`DIGITE A ${i + 1}`));
}

var maior = math.max(...notas);
var menor = math.min(...notas);

var soma = 0;

for (var i = 0; i < 6; i++) [
    somar += notas[i]
]

/////////////////////////////////
//////outra forma/////////

var notas = []

for (var i = 0; i < 6; i++) {
    notas.push(leia.questionInt(`DIGITE A ${i + 1}`));
}
var notasO = notas.sort((a, b) => a - b);
var somar = 0;
for (var i = 1; i < 5; i++) {
    somar += notasO[i];
}
var media = notasO / 4;
console.log(media)

////////////////////////////////
