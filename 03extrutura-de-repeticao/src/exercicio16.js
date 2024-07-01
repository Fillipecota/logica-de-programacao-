import leia from "readline-sync"

var cont= 0
var notaMedia = 0;
var mediaturma = 0;
var melhorestudante = 0;
var nomemelhorestudante;


for(var i = 0; i < 2; i++){
    var Nome = leia.question("INFORME O NOME: ");        
    for(var e = 0; e < 3; e++){
        var nota = leia.questionFloat("INFORME A " + e + "  NOTA: ")
        notaMedia += nota;
        cont++
    }        
    mediaturma += notaMedia;
    console.log(mediaturma)
    var notaM = notaMedia / 3
    notaMedia = 0;
    if(i === 0){
        melhorestudante = notaM
        nomemelhorestudante = Nome;
    }
    if(melhorestudante < notaM){
        melhorestudante = notaM
        nomemelhorestudante = Nome;
    }
}
console.log("MEDIA DA TURMA: " + (mediaturma / cont).toFixed(2));
console.log("MELHOR ESTUDANTE: " + nomemelhorestudante);
console.log("MEDIA: " + melhorestudante.toFixed(2));





























    // for (var i = 0; i < 3; index++) {

    //     if ( i === 0){
    //         aluno1 = leia.question("DIGITE O NOME DO PRIMEIRO ALUNO: ")
    //         aluno2 = leia.question("DIGITE O NOME DO SEGUNDO ALUNO: ")
    //         aluno3 = leia.question("DIGITE O NOME DO TERCEIRO ALUNO: ")
    //         not1 = leia.questionInt("DIGITE A 1 NOTA DO PRIMEIRO ALUNO: ")
    //         not2 = leia.questionInt("DIGITE A 1 NOTA DO SEGUNDO ALUNO: ")
    //         not3 = leia.questionInt("DIGITE A 1 NOTA DO TERCEIRO ALUNO: ")
    //      }
    //         if( i > 0){
    //         nota = leia.questionInt("DIGITE A PROXIMA NOTA DO ALUNO 1: ")
    //         not1 = nota + not1
    //         nota = leia.questionInt("DIGITE A PRIXIMA NOTA DO ALUNO 2: ")
    //         not2 = nota + not2
    //         nota = leia.questionInt("DIGITE A PRIXIMA NOTA DO ALUNO 3: ")
    //         not3= nota + not3
    //      }
    //  }  
    
    
    
    // not1= not1/3
    // not2= not2/3
    // not3= not3/3
    
    // console.log(aluno1 + "-" + not1)
    // console.log(aluno2 + "-" + not2)
    // console.log(aluno3 + "-" + not3)
