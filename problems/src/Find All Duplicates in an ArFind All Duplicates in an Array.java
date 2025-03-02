class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        Arrays.sort(nums);
        List <Integer> arr = new ArrayList();
             for (int i = 0; i < nums.length; i++) {
             if (Arrays.binarySearch(nums, nums[i])!=i) {
                 arr.add(nums[i]);
             }
         }
         return arr;
    } 
    }