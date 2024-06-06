import leia from "readline-sync"

//if/ else

var valor = 10;

if(valor > 10) {
    console.log("SIMMM")
} else {
    console.log("NÃOOOO")
}  







var numero = 1;

if(numero > 0){
    console.log("NUMERO POSITIVO.")
}else if (numero < 0){
    console.log("NUMERO NEGATIVO.")
}else{
    console.log("NUMERO É ZERO.")
}






var x =10;

if(x <100){
    console.log("MENOR QUE CEM")
}

if(x < 1000){
    console.log("MENOR QUE MIL")
}






// switch .. case .. break;


switch(1){
    case 1:
        console.log("PRIMEIRO")
        break;
    case 2:
        console.log("SEGUNDA")
        break
    default:
        console.log("NENHUM")
        break        
}


var CondigoErro = leia.questionInt("DIGITE O CODIGODO ERRO. ")

switch(CondigoErro){
    case 400:
    case 401:
    case 404:
        console.log("HTTP CODE ERROR APLICAÇÃO")
        break
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE ERRO DE SERVIDOR")
        break
    default:
        console.log("NÃO É ERRO")
        break                    
}

