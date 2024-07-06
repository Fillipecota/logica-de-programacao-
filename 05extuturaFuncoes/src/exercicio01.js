import leia from "readline-sync"

var numeroExercicio = leia.keyInSelect(1-exercicio01, 2-exercicio02)

switch (numeroExercicio) {
    case 1:
        exercicio01()        
        break;
    case 2:
        exercicio02()
        break
    default:
        break;
}


    function exercicio01() {

        var numero = []
        var numMulti= []
      
        adcNumero()
         forMult()
         console.log()

    }


    function exercicio02(){
       
        var numero = []
        var numero2 = 0
        adcNumero()
        soma()
        console.log(soma)
        
        



        
        
    }



  
  
  
  
  
  
  
  
    function adcNumero(){
     var x =leia.questionInt("DIGITE UM VALOR A CIMA QUE A REPETIÇÃO DEVE PARAR: ")
         for(var i = o; i< x; i++){
         numero = leia.questionInt("DIGITE UM NUMERO: ")
        }
    }

    function forMult(){
     var x =leia.questionInt("DIGITE UM VALOR A CIMA QUE A REPETIÇÃO DEVE PARAR: ")
     var z = leia.questionInt("DIGITE POR QUANTO QUER MULTIPLICAR: ")      
         for(var i = 0; i<x; i++){
         numMulti[i] = numero[i]*z  
    }

    }

    function soma(){
    var x =leia.questionInt("DIGITE UM VALOR A CIMA QUE A REPETIÇÃO DEVE PARAR: ")
         for(var i = 0; i < x; i++){
         numero2 = numero[i] + numero2
         }
    }