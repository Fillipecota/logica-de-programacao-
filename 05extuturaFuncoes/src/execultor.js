import leia from "readline-sync"
import { exercicio01 } from "./exercicio01.js";
import { geitoExercicio01 } from "./geitoExercicio01.js";
import { exercicio02 } from "./exercicio02.js";
import { exercicio03 } from "./exercicio03.js";
import { exercicio04 } from "./exercicio04.js";
import { geitoExercicio04 } from "./geitoExercicio04.js";
import { exercicio05 } from "./exercicio05.js";
import { exercicio06 } from "./exercicio06.js";
import { geitoExercicio06 } from "./geitoExercicio06.js";

var opcao = leia.keyInSelect(["exercicio01", "geitoExercicio01", "exercicio02", "exercicio03", "exercicio04", "geitoExercicio04", "exercicio05", "exercicio06", "exercicio06"]) + 1;

switch (opcao) {
    case 1:
        exercicio01();
        break;
    case 2:
        geitoExercicio01();
        break
    case 3:
        exercicio02();
        break
    case 4:
        exercicio03();
        break
    case 5:
        exercicio04();
        break
    case 6:
        geitoExercicio04();
        break
    case 7:
        exercicio05();
        break
    case 8:
        exercicio06();
        break
    case 9:
        geitoExercicio06();
        break
}