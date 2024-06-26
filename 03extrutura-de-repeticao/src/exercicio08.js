import leia from "readline-sync"

var soma = 0
var mult = 1

for (var i = 0; i < 6; i++){
    var num = leia.questionInt("DIGITE UM NUMERO  ")

    if ( num % 2 === 0 ){
        mult = mult* num
    }else{
        soma = soma + num
    }
   
}
console.log(mult)
console.log(soma)
    // mult *= num
    // mult = mult * num
    // formlulas iguais  
