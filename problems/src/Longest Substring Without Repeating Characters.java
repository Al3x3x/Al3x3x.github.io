class Solution {
    public int lengthOfLongestSubstring(String s) {
    if(s.length()==1)
    return 1;
        int max=0;
        for (int i = 0; i < s.length()-1; i++) {
           String aux=s.charAt(i)+"";
           int j=i+1;

           while(j<s.length() && !contiene(aux,s.charAt(j))){
           aux+=s.charAt(j);
           j++;
           }
         max = Math.max(aux.length(), max);
   }

   return max;
 }
 public boolean contiene(String palabra,char letra){   
         if (palabra.contains(letra+"")) {
             return true;
         }
         return false;
     }
}