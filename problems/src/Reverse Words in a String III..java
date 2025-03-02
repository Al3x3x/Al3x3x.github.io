class Solution {
    public String reverseWords(String s) {
           String reverse=;
           String[] words = s.split( );
           for (int i = 0; i  words.length; i++) {
             String aux = words[i];
             String a =;
               for (int j = aux.length()-1; j=0; j--) {
                   a+=aux.charAt(j);
               }
               words[i] = a;
         }
           for (int i = 0; i  words.length; i++) {
               if (i+1==words.length) {
                  reverse+=words[i];  
               }else{
                    reverse+=words[i]+ ;
               }
         }
         return reverse;
    }
}