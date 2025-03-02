class Solution {
    public boolean isSubsequence(String s, String t) {
       int index=0;
        for (int i = 0; i < s.length(); i++) {
            boolean presente = false;
         for (int j = index; j < t.length(); j++) {
             if (s.charAt(i)==t.charAt(j)){
                 presente=true;
                 index++;
                 break;
             }    
             index++;
        }
         if(presente==false){
             return false;
         }
      }
        
       return true;
}}