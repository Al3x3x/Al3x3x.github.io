class Solution {
    public static List<String> generateBinaryNumbers(int n) {   
        List<String> result = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            String a=Integer.toBinaryString(i);
            result.add(a);
        }
        return result;
    }
     
  public static int[] countBits(int n) {
        List<String> result = generateBinaryNumbers(n);
        int[] arr = new int[n+1];
        
        for (int i = 0; i < result.size(); i++) {
            int cont=0;
            for (int j = 0; j < result.get(i).length(); j++) {
                if (result.get(i).charAt(j)=='1') {
                    cont++;
                } 
            }
            arr[i]=cont;
            cont=0;
      }
        return arr;
    }
}