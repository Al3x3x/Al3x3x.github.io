class Solution {
    public String[] findWords(String[] words) {
         ArrayList <String> arr = new ArrayList();
      
         for (int i = 0; i < words.length; i++) {
             if (checador(words[i])) {
                arr.add(words[i]);
             }
         }
         String[] arreglo = new String[arr.size()];
         for (int i = 0; i < arr.size(); i++) {
             arreglo[i]= arr.get(i);
         }
         
         return arreglo;
    }
     
      public static boolean checador(String s){
         String row1="qwertyuiopQWERTYUIOP";
         String row2="asdfghjklASDFGHJKL";
         String row3="zxcvbnmZXCVBNM";
          
        String aux = s.charAt(0)+"";
         
         if (row1.contains(aux)) {
             for (int i = 0; i <  s.length(); i++) {
                if(!row1.contains(s.charAt(i)+"")){
                    return false;
                }
             }
         }else if (row2.contains(aux)) {
             for (int i = 0; i < s.length(); i++) {
                if(!row2.contains(s.charAt(i)+"")){
                    return false;
                }
             }
         }else if(row3.contains(aux)){
             for (int i = 0; i < s.length(); i++) {
                if(!row3.contains(s.charAt(i)+"")){
                    return false;
                }
             }
         }
         
         return true;
     }
    
}