import leia from "readline-sync"


var vez = 0 
var inf = 0


while (inf === 0) {
    var num = leia.questionInt("DIGITE UM NUMERO: ")

    if ( num > 100 || num < 200)
    vez ++
console.log("tem: " +vez + " numero")
    
}

















// var numero
// var vezess

// do {

//     if (numero >= 100 || numer <= 200){
//         vezess ++
//     }
//     if ( numer === 0 && vezess != 0)
//         console.log (vezess)

// }while(numero != 0){
//    nuemro = leia.questionInt
// }



// var numeContado =0

// // do{
// //     var numero = leia.questionInt("DIGITE UM NUMERO: ")
// //     if (numero >= 100 || numero <= 200){
// //         numeContado + 1

// //         }
    
// // }while (numero === 0){
// //     console.log("OS NUMEROS DE 100 A 200 FORAM: " + numeContado)
// // }

