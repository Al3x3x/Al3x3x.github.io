class Solution {
    public int numIdenticalPairs(int[] nums) {
            int contador=0;
         Arrays.sort(nums);
         for (int i = 0; i < nums.length-1; i++) {
             for (int j = i+1; j < nums.length; j++) {
                 if (nums[i]==nums[j]) {
                     contador++;
                 }
             }
         }
         return contador;
    }
}