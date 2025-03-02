import java.util.Scanner;
 
public class JavaApplication14 {
 
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int n = leer.nextInt();
        leer.nextLine();
         for (int i = 0; i < n; i++) {
            String s= leer.nextLine();
            metodo(s);
        }
    }
    
        public static void metodo(String s){
        if (s.charAt(0)<s.charAt(2)  && s.charAt(2)<s.charAt(4) ) {
            System.out.println("STAIR");
        }else if (s.charAt(0)<s.charAt(2)  && s.charAt(2)>s.charAt(4) ) {
            System.out.println("PEAK");
        }else{
            System.out.println("NONE");
        }
 
    }
    
}