class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] combinado = new int[nums.length];
       int j=-1;   
        for (int i = 0; i < nums.length/2; i++) {
            combinado[++j]=nums[i];
            combinado[++j]=nums[i+n];  
        }
        return combinado;   
    }
}