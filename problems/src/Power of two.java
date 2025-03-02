class Solution {
    public boolean isPowerOfTwo(int n) {
       double res=-1;
      int i =0;
      
      if (n==-1) {
           return false;
       }
       while(res<=n){
           if(res==n){
               return true;
           }else{
                 res = Math.pow(2, i++);
           }
       }
       
       return false;


    }
}