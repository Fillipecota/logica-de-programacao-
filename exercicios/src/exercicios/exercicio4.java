
package exercicios;

import java.util.Scanner;


public class exercicio4 {
     public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
    System.out.println("INFORME A TEMPERATURA EM ºC");
        double celsius = leia.nextDouble();
        
        double farenhait = (1.8 * celsius)+ 32;
        double kelvin = celsius + 273.15;
        
    System.out.println("CELCIUS: " + celsius + "°C");
    System.out.println("FARENHAIT: " + farenhait + "°F");
    System.out.println("KELVIN: "+ kelvin + "°K");
    
    }
    
}
