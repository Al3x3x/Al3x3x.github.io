class Solution {
    public String mergeAlternately(String word1, String word2) {
         int i = 0;
         int j = 0;
         String aux = "";
         if (word1.length() >= word2.length()) {
             while (i < word1.length()) {
                 aux += word1.charAt(i);
                 i++;
                 while (j < word2.length()) {
                     aux += word2.charAt(j);
                     j++;
                     break;
                 }
             }
         } else if(word1.length()<word2.length()) {

             while (i < word2.length()) {
                 while (j < word1.length()) {
                     aux += word1.charAt(j);
                     j++;
                     break;
                 }
                  aux += word2.charAt(i);
                 i++;
             }
         }

         return aux;
    }
}