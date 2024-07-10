import leia from "readline-sync"



function preencherVetor(tamanhoVetor,min, max){
    var vetor = [];
    for(var i=0; i< tamanhoVetor; i++){
        vetor[i] =  parseInt(Math.random()* (max - min)) + min
    }
    return vetor;
}



export function exercicio01(){
    var v1 = preencherVetor(9, 0, 100);
    var v2 = preencherVetor(9, 0, 100);
    var v3 = preencherVetor(9, 0, 100);

    var vResultado = []

    for(i=0; i < v1,length; i++){
        if(i >=o && i <= 3){
        vResultado[i] = v1[i];

    }else if(i >= 3 && i <= 5){
        vResultado[i] = v2[i];  
    }else if ( i >= 6 && i<= 8){
        vResultado[i] =  v3[i];
    }
    }
    console.log(v1)
    console.log(v2)
    console.log(v3)
    console.log(vResultado)
    }

