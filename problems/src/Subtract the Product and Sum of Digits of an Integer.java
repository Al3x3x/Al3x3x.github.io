class Solution {
    public int subtractProductAndSum(int n) {
          String asd= n+"";
        int sum=0;
        int mult=1;
        
         for (int i = 0; i < asd.length(); i++) {
             sum+=Integer.parseInt(asd.charAt(i)+"");
             mult*=Integer.parseInt(asd.charAt(i)+"");
         }
         
         return mult-sum;
    }
}