import leia from 'readline-sync'


var vezes = 0
var numeroMaior
var numeroMenor
do { 
  var numero = leia.questionInt("DIGITE UM NUMERO: ")

    if (vezes === 0){
      
      numeroMaior = numero
      numeroMenor = numero
    }

    if (numero >= numeroMaior){
      numeroMaior = numero
  }
    if ( numero <= numeroMenor){
       numeroMenor = numero
   }
   vezes ++
} while (vezes <= 15);
console.log("NUMERO MAIOR: " + numeroMaior)
console.log("NUMERO MENOR: " + numeroMenor)
   
    