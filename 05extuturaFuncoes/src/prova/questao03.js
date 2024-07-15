import leia from "readline-sync"

var temperaturaCelsius = leia.questionFloat("DIGITE A TEMPERATURA Celsius: ")

var temEscolha = leia.keyInSelect(["Celsius", "kelvin", "Fahrenheit"]) + 1


switch (temEscolha) {
    case 1:
        console.log(temperaturaCelsius + "°C")
        break;
    case 2:
        var temKelvin = temperaturaCelsius + 273.15
        console.log(temKelvin + "°k")
        break;
    case 3:
        var temFahre = (temperaturaCelsius * 1.8) + 32
        console.log(temFahre + "°F")
        break;
}
