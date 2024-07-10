import leia from "readline-sync"


function mostra(){
    var nome = leia.question("digite seu nome: ")
    console.log("óla " + nome)
}
mostra();


function somar(num1, num2){
 var result = num1 + num2;
 console.log(" O RESULTADO É: " + result)
}

somar(10, 17);

var nume1 = leia.questionInt("DIGITE UM NUMERO: ")
var nume2 = leia.questionInt("DIGITE UM NUMERO: ")

somar(nume1, nume2)

function subtrair (num1,num2){
    var result = num1 - num2;
    console.log(" O RESULTADO É: " + result)
}

subtrair(10,5)

function multi (num1, num2){
    var result = num1* num2;
    return result;
}

var resultado = multi(5,5)
console.log(resultado)


function preencherVetor(tamanhoVetor,min, max){
    var vetor = [];
    for(var i=0; i< tamanhoVetor; i++){
        vetor[i] =  parseInt(Math.random()* (max - min)) + min
    }
    return vetor;
}

var listaa = preencherVetor(10,50,200)
console.log(listaa)
