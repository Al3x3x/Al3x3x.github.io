class Solution {
    public int[] sortArrayByParity(int[] nums) {
              int[] retorno= new int[nums.length];
        ArrayList <Integer> pares = new ArrayList();
        ArrayList <Integer> impares = new ArrayList();
         for (int i = 0; i < nums.length; i++) {
             if (nums[i] % 2 == 0) {
                 pares.add(nums[i]);
             } else {
                 impares.add(nums[i]);
             }
         }
         for (int i = 0; i < pares.size(); i++) {
             retorno[i] = pares.get(i);
         }
         int j = pares.size();

         for (int i = 0; i < impares.size(); i++) {
             retorno[j++] = impares.get(i);
         }
         return retorno;
    }
}