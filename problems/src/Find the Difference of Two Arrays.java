class Solution {
      public static List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        List<List<Integer>> retorno = new ArrayList<>();
        List<Integer> aux1 = new ArrayList<>();
        List<Integer> aux2 = new ArrayList<>();

        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            set2.add(num);
        }

        for (int num : nums1) {
            if (!set2.contains(num) && !aux1.contains(num)) {
                aux1.add(num);
            }
        }

        for (int num : nums2) {
            if (!set1.contains(num) && !aux2.contains(num)) {
                aux2.add(num);
            }
        }

        Collections.sort(aux1);
        Collections.sort(aux2);

        retorno.add(aux1);
        retorno.add(aux2);

        return retorno;
    }

}