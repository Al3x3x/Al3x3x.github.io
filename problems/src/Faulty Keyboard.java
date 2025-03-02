class Solution {
    public String finalString(String s) {
        
        String aux="";
           for (int i = 0; i < s.length(); i++) {
               if (s.charAt(i)=='i') {
                   aux=reverse(aux);
               }else{
                   aux+=s.charAt(i);
               }
           }
        
        return aux;
    }
       
      public static String reverse(String s){
          String aux="";
          for (int i = s.length()-1; i >=0 ; i--) {
              aux+= s.charAt(i);
          }
          return aux;
      }
}