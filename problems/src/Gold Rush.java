By Al3x3x, contest: Codeforces Round 871 (Div. 4), problem: (D) Gold Rush, Accepted, #, Copy
import java.util.Scanner;
public class JavaApplication4 {
 
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int casos = leer.nextInt();
 
        
        for (int i = 0; i < casos; i++) {
        int n = Integer.parseInt(leer.next());
        int m = Integer.parseInt(leer.next());
            if (metodo(n,m)) {
                System.out.println("YES");
            }else
                System.out.println("NO");
        }
        
        
    } 
    
    public static boolean metodo(int n,int m){
        if (n==m) {
            return true;
        }
        if (n%3!=0) {
            return false;
        }
        if (n<m) {
            return false;
        }
        boolean left=metodo(n/3,m);
        boolean right=metodo((n/3)*2,m);
        
        return left||right;
    }
    
}