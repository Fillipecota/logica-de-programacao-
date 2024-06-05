
package exercicios;

import java.util.Scanner;

public class exercicio6 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        int A = 10;
        int B = 20;
        
      int aux = A;
      A = B;
      B = aux;
        
        
        System.out.println(" VALOR DE A" + A);
        System.out.println(" VALOR DE B" + B);
    }
}
