class Solution {
    public int singleNumber(int[] nums) {
        int resultado =0;
        for(int i=0;i<nums.length;i++){
     resultado = resultado ^ nums[i];
        }
        return resultado;
    }
      }