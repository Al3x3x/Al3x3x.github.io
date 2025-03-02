class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] retorno = new int[nums.length*2];
       
        for(int i=0;i<nums.length;i++){
        retorno[i] = nums[i];
        retorno[i+nums.length] = nums[i];
        }
        return retorno;
    }
}