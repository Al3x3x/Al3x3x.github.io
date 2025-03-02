class Solution {
    public int maximumWealth(int[][] accounts) {
     int mayor =0;
     
        for (int i = 0; i < accounts.length ; i++) {
            int aux=0;
            for (int j = 0; j < accounts[0].length; j++) {
                aux+=accounts[i][j];
            }
            mayor=Math.max(mayor, aux);
        }
        return mayor;
    }
}