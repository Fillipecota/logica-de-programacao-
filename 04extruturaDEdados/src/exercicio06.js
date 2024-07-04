import leia from "readline-sync"

// var lista = []
var listaMaior = []
var listaMenor = []
var dois

for (var i = 0; i < 30; i++){
    var um = parseInt(Math.random()* 23) +12
    do{
      dois = parseInt(Math.random()* 23) + 12
    }while(um === 0)


    if ( um > dois){
         listaMaior[i] = um 
         listaMenor[i] = dois
    }else{
         listaMaior[i] = dois
         listaMenor[i] = um
    }
}
for(i = o; i<30; i++)
var dia = (i+1).toString().padStart(2,"0");
console.log("dia" + dia + "MAXIMA" + listaMaior[i] + "MINIMA" + listaMenor[i])
