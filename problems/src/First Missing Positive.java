class Solution {
   public static int firstMissingPositive(int[] nums) {
        int n = nums.length;
         
        int nextIndex = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                nums[nextIndex++] = nums[i];
            }
        }

        if (nextIndex == 0) {
            return 1;
        }

        for (int i = 0; i < nextIndex; i++) {
            int num = Math.abs(nums[i]);
            if (num <= nextIndex) {
                nums[num - 1] = -Math.abs(nums[num - 1]);
            }
        }

        for (int i = 0; i < nextIndex; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        return nextIndex + 1;
    }
}