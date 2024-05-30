
package exercicios;

import java.util.Scanner;
import static javax.swing.text.html.HTML.Tag.S;


public class exercicio2 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
     System.out.println("Digite quantos anos");
        int Idade = leia.nextInt();
     System.out.println("Digite o mês");
        int mês = leia.nextInt();
     System.out.println("Digite o dia");
        int dia = leia.nextInt();
       
       int totalDias = (Idade * 30)+( mês * 30)+ dia;
               
        System.out.println("você tem" + totalDias + "Dias de vida");
            
                
    }
}
