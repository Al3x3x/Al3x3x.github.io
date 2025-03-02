class Solution {
    public int maxProfit(int[] prices) {
         int min=prices[0];
        int max= 0;

         for (int i = 0; i < prices.length; i++) {
             if (prices[i]>max) {
                 max=prices[i];
             }
         
             if (prices[i]<min && ((i+1)!=prices.length-1)) {
                 min=prices[i];
                 max=0;
             }
         }


      if(min==prices[prices.length-1]){
             return 0;
         }
         return max-min; 
    }
}