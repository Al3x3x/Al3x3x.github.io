class Solution {
    public int pivotInteger(int n) {
          int [] arreglo1 = new int[n];
         int [] arreglo2 = new int[n];
         arreglo1[0] =1;
         
         for (int i = 1; i < n; i++) {
           arreglo1[i]  = arreglo1[i-1]+i+1;
         }
         
         arreglo2[n-1] =n;
          
           for (int i = n-2; i >=0; i--) {
           arreglo2[i]  = arreglo2[i+1]+i+1;
         }
         
         
         for (int i = 0; i < arreglo1.length; i++) {
             if (arreglo1[i]==arreglo2[i]) {
                 return i+1;
             }
         }

         return -1;
    }
}