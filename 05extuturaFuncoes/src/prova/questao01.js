import leia from "readline-sync"

var palavra = leia.question("DIGITE UMA PALAVRA: ")

var num = 0

for(var i = 0; i < palavra.length; i++){
    if (palavra[i] === "a"|| palavra[i] === "e"|| palavra[i] === "i "|| palavra[i] === "o" || palavra[i] ==="u"){
        num ++
    }
    console.log(num)
}