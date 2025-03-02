class Solution {
    public int xorOperation(int n, int start) {
          if(n==0)
          return 0;

        int[] arr = new int[n];
        arr[0]=start;
        int j=1;
        n=n-1;
     if (start==0 || start%2==0) {
         int i=start+1;
         
      while(n>0){
          if(i%2==0){
           arr[j++]=i;
           n--;
          }
          i++;
      } 
     }else{     
        int i=start+1;   
      while(n>0){
          if(i%2!=0){
           arr[j++]=i;
           n--;
          }
          i++;
      }         
     }
     int xor = arr[0];
     for (int i = 1; i < arr.length; i++) {
         xor^=arr[i];
     }
     
     return xor;
    }
}