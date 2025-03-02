class Solution {
    public int scoreOfString(String s) {
        int sum = 0;

        if (s.length() == 0) {
            return 0;
        } else if (s.length() == 1) {
            return s.charAt(0);
        }
        int aux = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            aux = Math.abs(s.charAt(i) - s.charAt(i + 1));
            sum += aux;
        }
        return sum;
    }
}