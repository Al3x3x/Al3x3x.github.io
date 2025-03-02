class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }
        
        String[] mappings = {
            "0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
        };
        
        backtrack(result, digits, mappings, "", 0);
        
        return result;
    }
    
    private void backtrack(List<String> result, String digits, String[] mappings, String current, int index) {
        if (index == digits.length()) {
            result.add(current);
            return;
        }
        
        String letters = mappings[digits.charAt(index) - '0'];
        for (int i = 0; i < letters.length(); i++) {
            backtrack(result, digits, mappings, current + letters.charAt(i), index + 1);
        }
    }
}