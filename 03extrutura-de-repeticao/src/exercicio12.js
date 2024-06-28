import leia from "readline-sync"

var tentativas = 0
var numeroMagico
var opcaoJogo=leia.keyInSelect(["PVP", "PVE"])

if (opcaoJogo === 0){
    //escolher um numero
    numeroMagico = leia.questionInt("DIGITE UM NUMERO MAGICO: ",{hideEchoBack:true})
}else if(opcaoJogo === 1 ){
    //sortear um numero
var dificuldade= leia.keyInSelect(["FACIL","MEDIO","DIFICIL"])
    switch (dificuldade) {
        case 0:
            numeroMagico = parseInt(Math.random() * 10)
            break;
        case 1:
            numeroMagico = parseInt(math.random() * 1000)
            break;
        case 2:
            numeroMagico = parseInt(math.random()* 100000)
            break;
         }
     }
     do {
        var palpite = leia.questionInt("DIGITE SEU PALPITE: ")
        if ( palpite > numeroMagico){
        console.log("NUMERO MAGICO É MENOR:")
     }else if ( palpite < numeroMagico){ 
        console.log("NUMERO MAGICO É MAIOR")
        }else{
            console.log("ACERTOU MIZERAVEL")
        }
        tentativas++
     } while (palpite !== numeroMagico);
     console.log("DEMOROU: " + tentativas + "  tentativas" )