import leia from "readline-sync"

// var num = leia.questionInt("DIGITE UM NUMERO: ")
// var mult = num

// while (mult >= 1) {

//     console.log(num + " x " + mult + " = " + mult * num)
//     mult--
// }
   
   //--------------------------------------------------



   var numero = leia.questionInt("DIGITE UM NUMERO: ")
   var resultado = 1

   while(numero > 0){
    resultado= resultado* numero
    numero--
   }
   console.log("FATORIAL E: " + resultado)


   
