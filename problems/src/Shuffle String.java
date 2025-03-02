class Solution {
    public String restoreString(String s, int[] indices) {
    char[] cadena = new char[s.length()];
      String salida = "";
      
          for (int i = 0; i < s.length(); i++) {
             cadena[indices[i]]=s.charAt(i);
         }
         for (int i = 0; i < cadena.length; i++) {
             salida+=cadena[i]+"";
         }
          return salida; 
    }
}