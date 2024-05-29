
package pkg01.aula.operadores;


public class AulaOperadores {

 
    public static void main(String[] args) {
        // ARITMÉTICOS
        int a = 10 + 1;
        int b = a - 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
        a +=10;
        b -= 1;
        c *=5;
        d /= 1;
        
                
        System.out.println("VALOR DE A:" + a);
        System.out.println("VALOR DE B:" + b);
        System.out.println("VALOR DE C:" + c);
        System.out.println("VALOR DE D:" + d);
        System.out.println("VALOR DE E:" + e);
        
        //----------------------------------------
        //LÓGICOS
        
        boolean ehMaior = 10>20;
        boolean ehMenor = 10<20;
        boolean ehManorIgual = 10 <= 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehIgual = 10 == 20;
        boolean ehDiferente = 10 != 20;
        
        //10>10;  // FALSO
        //10>=10;  //VERDADEIRO
        
        System.out.println("MAIOR:" + ehMaior);
        System.out.println("MENOR:" + ehMenor);
        System.out.println("MENOR IGUAL:" + ehManorIgual);
        System.out.println("MAIOR IGUAL:" + ehMaiorIgual);
        System.out.println("IGUAL:" + ehIgual);
        System.out.println("DIFERENTE:" +ehDiferente);
        
        //----------------------------------
        //LÓGICOS
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = (10 > 9)|| (5 > 1);
        boolean valor6 = ((10 > 9) && (5 > 1))|| ((120 < 1) && (31 >3));
        
        boolean negaçao =!true;
        boolean negaçao2 = !valor6;
        
        
        
    
    }
}
