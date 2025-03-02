class Solution {
    private int findRomanSymbol(char[] symbols, char romanSymbol) {
        for (int i = 0; i < symbols.length; ++i) {
            if (symbols[i] == romanSymbol) return i;
        }
        return -1;
    }

    public int romanToInt(String s) {
        char[] romanChar = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
        int[] romanValue = {1, 5, 10, 50, 100, 500, 1000};
        int result = 0;

        for (int i = s.length() - 1; i >= 0; --i) {
            int num = romanValue[findRomanSymbol(romanChar, s.charAt(i))];
            if (num * 4 < result) {
                result -= num;
            } else {
                result += num;
            }
        }

        return result;
    }
}