class Solution {
    public String reversePrefix(String word, char ch) {
         if (!word.contains(ch+"")) {
            return word;
        }
        
        int pos=word.indexOf(ch+"");
        String aux="";
        
        for (int i = pos; i >=0 ; i--) {
         aux+=word.charAt(i);
        }
        for (int i = pos+1; i < word.length(); i++) {
            aux+=word.charAt(i);
        }
        return aux;
    }
}