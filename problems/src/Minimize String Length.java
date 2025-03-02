class Solution {
    public int minimizedStringLength(String s) {
          int contador=0;
        while(!s.isEmpty()){
          String aux = s.charAt(0)+"";
          s=s.replace(aux,"");
          contador++; 
        }  
        return contador;
    }
}