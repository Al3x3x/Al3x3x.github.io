class Solution {
    public int[] runningSum(int[] nums) {
           if(nums==null){
            return null;
        }
 int[] retu = new int[nums.length] ;
 int sum = nums[0];
 retu[0] = nums[0];
         for (int i = 1; i < nums.length; i++) {
             sum+=nums[i];
             retu[i] = sum;
         }
 
        return retu;

    }
}