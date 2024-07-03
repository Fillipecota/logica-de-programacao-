import leia from "readline-sync"


var lista = ["Fillipe","Cota","2","3","4","5"]
// // var começa contagem por 0


console.log(lista[0])
console.log(lista[1])

lista [1] = "Sant'Anna"
lista [2] = "Cota"
lista [3] = 32
lista [4] = "solteiro"
lista [5] = "tijucas"

console.log(lista[0]+ "\n" + lista[1]+"\n" +lista[2]+ "\n" + lista[3])
console.log("TA RUIN CONTINUA")

lista.push ("sc")
lista.push(1)
lista.push(2)
lista.push(3)

lista[6] = lista[7] + lista[8]+ lista[9]

console.log(lista)


//       preecher lista automaticamente 
//-----------------------------------------
// for(var i = 0; i < 10; i++){
//     lista[i] = "BORA POW"
// }

// console.log(lista)
//-----------------------------------------

// adc em sequencia por comandos
var i = 5;
while (i >= 0){
    lista[i] = leia.question("DIGITE UM NOME: ")
    i++;
}
console.log(lista)


//----------------------------------------

//        achar palavar com as letras e demostrar ela na tela 

for(var j = 0; j< lista.length; j++){
    if (lista[j].includes("cota")){
        console.log(lista[j])
    }

}

//-----------------------------------

//       achar palavar com as letras e demostrar ela na tela 

for(var valor of lista){
    if(valor.includes(Fillipe)){
        console.log(valor)
    }
}
//------------------------------------
//       achar palavar com as letras e demostrar ela na tela 

lista.forEach(valor => {
    console.log(valor)
});

//------------------------------------

var i = 5;
while (i >= 0){
    var numeroAleatorio = parseInt(Math.random() * 60) +1
    lista.push(numeroAleatorio);
    i++;
}