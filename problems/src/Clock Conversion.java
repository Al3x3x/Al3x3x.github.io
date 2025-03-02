import java.util.Scanner;
public class JavaApplication14 { 
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int n = leer.nextInt();
        leer.nextLine();
        
         for (int i = 0; i < n; i++) {
             String s=leer.nextLine();
            metodo(s);
        }
    }  
 
       public static void metodo(String s) {
           int digito1= Integer.parseInt(s.charAt(0)+"");
           int digito2= Integer.parseInt(s.charAt(1)+"");
 
           if (digito1==0 && digito2!=0) {
               System.out.println(s+ " AM");
           }else{
            String numero = s.substring(0,2);
            String sub = s.substring(2,5);
 
               switch(numero){
                   case "10" -> {
                       System.out.println("10"+sub+" AM");
                   }
                   case "11" -> {
                       System.out.println("11"+sub+" AM");
                   }
                    case "00" -> {
                       System.out.println("12"+sub+" AM");
                   }
                    case "12" -> {
                       System.out.println("12"+sub+" PM");
                   }
                   case "13" -> {
                       System.out.println("01"+sub+" PM");
                   }
                   case "14" -> {
                       System.out.println("02"+sub+" PM");
                   }
                   case "15" -> {
                       System.out.println("03"+sub+" PM");
                   }
                   case "16" -> {
                       System.out.println("04"+sub+" PM");
                   }
                   case "17" -> {
                       System.out.println("05"+sub+" PM");
                   }
                   case "18" -> {
                       System.out.println("06"+sub+" PM");
                   }
                   case "19" -> {
                       System.out.println("07"+sub+" PM");
                   }
                   case "20" -> {
                       System.out.println("08"+sub+" PM");
                   }
                   case "21" -> {
                       System.out.println("09"+sub+" PM");
                   }
                   case "22" -> {
                       System.out.println("10"+sub+" PM");
                   }
                   case "23" -> {
                       System.out.println("11"+sub+" PM");
                   }        
               }              
           }
      }      
}