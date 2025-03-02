class Solution {
    public int maxProduct(String[] words) {
        int[][] matriz = new int[words.length][26];
        for(int i = 0; i < words.length; i++){
            for(char c : words[i].toCharArray())
                matriz[i][c - 97]++;
        }
        int mayor = 0;

        for(int i = words.length - 1; i > 0; i--){
            for(int j = i - 1; j >= 0; j--){
                if (product(matriz[i], matriz[j])){
                    int prod = words[i].length() * words[j].length();
                    mayor = Math.max(mayor, prod);
                }
            }
        }
        return mayor;
    }

    public boolean product(int[] str1, int[] str2){
        for(int i = 0; i < 26; i++)
            if(str1[i] > 0 && str2[i] > 0)
                return false;

        return true;
    }
}