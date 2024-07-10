import leia from"readline-sync"
import{exercicio02} from "./exercicio01.js";
import{exercicio01 } from "./exercicio02.js";

var opcao = leia.keyInSelect(["exercicio01",]) + 1;

switch(opcao){
    case 1:
        exercicio01();
        break;
    case 2:
        exercicio02();
        break

}