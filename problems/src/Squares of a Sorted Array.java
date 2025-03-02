import java.util.Arrays;
class Solution {
    public int[] sortedSquares(int[] nums) {
          ArrayList<Double> arreglo = new ArrayList();
        int[] numeros = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            numeros[i] = (int) Math.pow(nums[i], 2);

        }
        Arrays.sort(numeros);
        return numeros;
    }
}