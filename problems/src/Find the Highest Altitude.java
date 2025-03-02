class Solution {
    public int largestAltitude(int[] gain) {
        int max=0;
        ArrayList <Integer> arr = new ArrayList();
        arr.add(0);
        arr.add(gain[0]);
        
        for (int i = 1; i < gain.length; i++) {
              arr.add(gain[i]+gain[i-1]);
              gain[i]=(gain[i]+gain[i-1]);
        }
        
          for (int i = 0; i <arr.size(); i++) {
              max=Math.max(arr.get(i), max);
          }
        return max;
    }
}