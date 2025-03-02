import java.util.Scanner;
public class JavaApplication14 { 
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int n = leer.nextInt();
        leer.nextLine();
         for (int i = 0; i < n; i++) {
            metodo(leer.nextInt());
        }
    }  
       public static void metodo(int n) {
        boolean gato = true;
        boolean gatointerno = true;
        int cont = 0;
        for (int i = 0; i < n * 2; i++) {
            int continterno = 0;
            gatointerno = gato;
            for (int j = 0; j < n * 2; j++) {
        
                if (gatointerno) {
                    System.out.print("#");
                } else {
                    System.out.print(".");
                }
                continterno++;
                if (continterno == 2) {
                    gatointerno = !gatointerno;
                    continterno = 0;
                }
 
            }
            System.out.println("");
            cont++;
            if (cont == 2) {
                gato = !gato;
                cont = 0;
            }
        }
      }      
}