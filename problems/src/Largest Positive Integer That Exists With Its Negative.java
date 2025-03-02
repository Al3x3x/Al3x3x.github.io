class Solution {
        public int findMaxK(int[] nums) {
       Arrays.sort(nums);
       int max=0;
         for (int i = nums.length-1; i >=0 ; i--) {
              max=nums[i]*-1;
             if (Arrays.binarySearch(nums,max)>=0) {
                 return nums[i];
             }
         }
        return -1;
    }
}