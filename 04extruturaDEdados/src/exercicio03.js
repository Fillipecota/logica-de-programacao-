import leia from "readline-sync"


var lista = []

for (i = 0; i <=10; i++){
    lista[i]=leia.questionInt("DIGITE UM NUMERO: ")
}
for (j=0; j<= 10; j++){
    if (lista[j] % 2 ===0){
        console.log(lista[j])
    }
}