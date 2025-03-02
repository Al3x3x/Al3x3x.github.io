class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
         int rigth=0;
         int contador = 0;
         
         for (int l = 0; l < nums.length; l++) {
             if (nums[l]<k) {
                 contador++;
             }
            int producto=nums[l];
            rigth=l+1;
             while(rigth<nums.length && producto*nums[rigth]<k){
                 contador++;
                 producto =producto*nums[rigth];
                 rigth++;
             }
         }
         return contador;
}
}