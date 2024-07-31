import leia from "readline-sync"

var opcao = leia.keyInSelect(
    [   "C -> F",
        "C -> K",
        "K -> C",
        "k -> F",
        "F -> C",
        "F -> K"],
    "SELECIONE A OPCAO") + 1;

var temp = leia.questionFloat("INFORME A TEMPERATURA: ")

switch (opcao) {
    case 1:
        var F = (temp * 1.8) + 32
        console.log("valor em Fahrenheit " + F)
        break;
    case 2:
        var K = temp + 273.15
        console.log("valor em kelvin " + k)
        break;
    case 3:
        var C = temp - 273.15
        console.log("valor em Celsius " + C)
        break;
    case 4:
        var F = (temp - 273.15) * 1.8 + 32
        console.log("valor em Fahrenheit " + F)
        break
    case 5:
        var C = (temp - 32) * (5 / 9)
        console.log("valor em Celsius: " + C)
        break
    case 6:
        var K = (temp - 32) * (5 / 9) + 273.15
        console.log("valor em kelvin: " + K)
        break;
}