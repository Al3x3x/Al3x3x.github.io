class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] nuevo = new int[nums.length];
         for (int i = 0; i < nums.length; i++) {
             int aux=0;
             for (int j = 0; j < nums.length; j++) {
                 if (nums[i]>nums[j]) {
                  aux++;            
                 }
             }
             nuevo[i]=aux;
         }
         return nuevo; 
    }
}