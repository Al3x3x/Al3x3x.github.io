class Solution {
    public int searchInsert(int[] nums, int target) {
          int pos=0;
       int y =1;
       int ultimo = 0;
       for (int i = 0; i < nums.length; i++) {
           if (nums[i]==target) {
               return i;
           }else{
               if ((nums[i]>target) && (target > ultimo)) {
                   return i;
               }
               ultimo=nums[i];
           }
             if (target>nums[nums.length-1]) {
               return nums.length;
       }
       
       }
     
       
       return 0; 
    }
}
