import leia from "readline-sync"

var NumueroSenha = leia.questionInt("DIGITE A SENHA: ")

if (NumueroSenha === 1234){
    console.log("ACESSO PERMITIDO")
}else{ 
    console.log(" ACESSO NEGADO")

}