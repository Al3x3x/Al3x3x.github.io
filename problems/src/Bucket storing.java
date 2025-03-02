import java.util.Scanner;
 
public class ICPC {
 
    public static void main(String[] args) {
     Scanner leer = new Scanner(System.in);
     double a= Integer.parseInt(leer.next());
     double b= Integer.parseInt(leer.next());
     double c= Integer.parseInt(leer.next());
     double ret=Math.ceil((a*b)/c);
     System.out.printf("%.0f\n", ret);
    }  
}