class Solution {
    public int[] numberGame(int[] nums) {
      Arrays.sort(nums);
        int[] nuevo = new int[nums.length];

        for(int i=0;i<nums.length;i++){
         nuevo[i+1]=nums[i];
         nuevo[i]=nums[i+1];
         i++;
        } 
   return nuevo;
    }
}