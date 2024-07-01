import leia from"readline-sync"

var alturaMaior = 0
var alturaMenor = 0
var mediaAltPopul = 0
var medMulhAltura =0 
var percHome = 0
var alturaH = 0
var alturaM = 0
var alturaMamulh = 0
var alturaMemulh= 0   
var vezes = 0
var quantM = 0 
var quantH = 0
var geral = 0
var geralM = 0

do{

var populacao = leia.keyInSelect(["homem" , "mulher"])

if ( populacao === 0){
    alturaH =leia.questionFloat("DIGITE SUA ALTURA: ")
    quantH++
    geral = geral + alturaH

    if (alturaMaior < alturaH){
        alturaMaior = alturaH
    }
     if ( alturaMenor>alturaH ){
        alturaMenor = alturaH
    } 
}

    if ( populacao ===1){
        alturaM = leia.questionFloat("DIGITE SUA ALTURA: ")
        quantM ++
        geral= geral+ alturaM
        geralM = geralM + alturaM

        if (alturaMaior < alturaM){
            alturaMaior = alturaM    
        }
         if  (alturaMenor > alturaM){
            alturaMenor = alturaM
        }
        if (alturaMamulh < alturaM){
            alturaMamulh = alturaM
        } 
         if (alturaMemulh > alturaM){
            alturaMemulh = alturaM
        }
        if (alturaMenor === 0){
            alturaMenor = alturaMaior
        }
    }

        vezes ++

            
        
       
}while (vezes < 3)

    
    mediaAltPopul =  geral/2
    percHome = quantH *( 100/2)
    medMulhAltura = geralM/quantM

    console.log( "Altura maior É: " + alturaMaior+ "\n" + "Altura menor É: " + alturaMenor)
    console.log("MEDIA DE ALTURA DA POPULAÇÃO É: "+ mediaAltPopul.toFixed(2))
    console.log ("MEDIA DE ALTURA DAS MULHERES É: "+ medMulhAltura.toFixed(2))
    console.log ("A PERCENTUAL DE HOMEM É: "+ percHome+"%")

