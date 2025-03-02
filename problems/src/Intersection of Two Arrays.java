class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
         Arrays.sort(nums1);
        Arrays.sort(nums2);
        ArrayList <Integer> arr = new ArrayList();
         for (int i = 0; i < nums1.length; i++) {
             for (int j = 0; j < nums2.length; j++) {
                 if (nums1[i]==nums2[j]) {
                     arr.add(nums1[i]);
                     break;
                 }
             }

             while(i+1<nums1.length && nums1[i]==nums1[i+1]){
                 i++;
             }
         }

         int[] salida = new int[arr.size()];
         for (int i = 0; i < arr.size(); i++) {
             salida[i]= arr.get(i);
         }
        return salida;
    }
}