import leia, { questionInt } from "readline-sync"

console.log("INFORME O VALOR DA SUA DOACAO")
console.log("1 - R$10,00")
console.log("2 - R$25,00")
console.log("3 R$50,00")
console.log("4 - OUTRO VALOR")

var opcao = leia.question("INFORME A OPCAO")

//if(opcao === "1"){
  //  console.log("VOCÊ DOOU R$10,00! OBRIGADO!!!")
//}else if(opcao === "2"){
  //  console.log("VOCÊ DOOU R$25,00! OBRIGADO!!!")
//}else   if(opcao === "3"){
  //  console.log("VOCÊ DOOU R$50,00! OBRIGADO!!!")
//}else if(opcao === 4){
  //  var valor = leia.question("INFORME O VALOR QUE DESEJA DOAR")
 //   console.log("VOCE DOOU R$" + valor + "OBRIGADA")
//}

switch (opcao) {
    case 1:
        console.log("VOCÊ DOOU R$10,00! OBRIGADO!!!")
        break;
    case 2:    
    console.log("VOCÊ DOOU R$25,00! OBRIGADO!!!")
        break;
    case 3:
        console.log("VOCÊ DOOU R$50,00! OBRIGADO!!!")
        break;
    case 4:
        var valor = leia.question("INFORME O VALOR QUE DESEJA DOAR")
        console.log("VOCE DOOU R$" + valor + "OBRIGADA")
    default:
        console.log(" valor ivalido")
        break;
}