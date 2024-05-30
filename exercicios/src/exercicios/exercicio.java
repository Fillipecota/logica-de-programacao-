
package exercicios;

import java.util.Scanner;


public class exercicio {
    public static void main(String[] args) {
        
    Scanner leia = new Scanner(System.in);
    
        System.out.println("Digite largura");
    double largura = leia.nextDouble();
         
        System.out.println("Digite altura");
    double altura = leia.nextDouble();
    
          
    double result = largura * altura;
    
         System.out.println("resultado" + result);
         
    }            
}
