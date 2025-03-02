class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] retu = new int[2];

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) == target) {
                    retu[0] = i;
                    retu[1] = j;
                    return retu;
                }
            }
        }
        return retu;
    }
}