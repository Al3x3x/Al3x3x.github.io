
import java.util.Scanner;
 
public class ICPC {
 
    public static void main(String[] args) {
      int cont=0;
      Scanner sc = new Scanner(System.in);
      int x=Integer.parseInt(sc.next());
      int estatura=Integer.parseInt(sc.next());
      
        for (int i = 0; i < x; i++) {
            int aux=Integer.parseInt(sc.next());
            if (aux<=estatura) {
                cont++;
            }
        }
        System.out.println(cont);
    }
    
}