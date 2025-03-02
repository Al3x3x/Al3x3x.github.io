class Solution {
    public int search(int[] nums, int target) {
        int pos= Arrays.binarySearch(nums,target);
        if(pos<0)
        return-1;  
        return pos;
    }
}