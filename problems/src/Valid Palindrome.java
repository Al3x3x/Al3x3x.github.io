
class Solution {
   public static boolean isPalindrome(String s) {
        s = s.trim();
        s = s.toLowerCase();

        String aux = "";

        for (int i = 0; i < s.length(); i++) {
            if (Character.isAlphabetic(s.charAt(i))||Character.isDigit(s.charAt(i)))  {
                aux += s.charAt(i);
            }
        }

        String aux2 = "";
        for (int i = aux.length() - 1; i >= 0; i--) {
            aux2 += aux.charAt(i);
        }

        return aux.equals(aux2);
    }
}