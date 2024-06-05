
package exercicios;

import java.util.Scanner;


public class exercicio3 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("DIGITE QUANTIDADE DE ELEITORES");
         double  eleitores = leia.nextDouble();
                  
        System.out.println("DIGITE QUANTOS VOTOS BRANCO");
         double brancos = leia.nextDouble();
      
        System.out.println("DIGITE QUANTOS VOTOS NULOS");
        double nulos = leia.nextDouble();
       
        System.out.println("DIGITE QUANTOS VOTOS VALIDOS");
        double validos =  leia.nextDouble();
       
        double BrancoPercentual =  (brancos / eleitores) * 100;
        double NulosPercentual =  (nulos / eleitores) * 100;
        double ValidosPercentual =  (validos / eleitores) * 100;
        
        System.out.println("PORCENTAGEM BRNCOS: " + BrancoPercentual + "%");
        
        System.out.println("PERCENTAGEM NULOS: " + NulosPercentual + "%");
         
        System.out.println("PORCENTAGEM VALIDOS: " + ValidosPercentual + "%");
    }  
}
