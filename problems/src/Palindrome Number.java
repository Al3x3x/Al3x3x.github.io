class Solution {
    public boolean isPalindrome(int x) {
        String s = x + "";
        String inv = "";
        for (int i = s.length()-1; i >= 0; i--) {
            inv += s.charAt(i);
        }
        if (inv.equals(s)) {
            return true;
        } else {
            return false;
        }
    }
}   

     
