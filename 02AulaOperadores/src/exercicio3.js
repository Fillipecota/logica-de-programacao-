import leia from "readline-sync"

var placa = leia.questionInt("DIGITE O ULTIMO NUMERO DA PLACA:")

if (placa === 0 || placa === 1 ){
    console.log("NÃO PODE RODAR NA SEGUNDA-FEIRA")
}else if (placa === 2 || placa === 3){
    console.log("NÃO PODE RODAR NA TERÇA-FEIRA")
}else if (placa === 4 || placa === 5){
    console.log("NÃO PODE RODA NA QUARTA-FEIRA")
}else if (placa === 6 || placa === 7){
    console.log("NÃO PODE RODA NA QUINTA-FEIRA")
}else{
    console.log("NÃO PODE RODA NA SEXTA-FEIRA")
} 



// var placa = "abc-1234"
             // 01234567     
// placa.charAt(7)

// var plac = " abc-1234AC"     10 CARACTERES
            //  0123456789      TAMANHO -1
// placa.length
// placa.charAt(placa -1)
