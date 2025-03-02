class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
 int[] arreglo = new int[nums1.length+nums2.length];
        int cont=0;
        for(int i=0;i<nums1.length;i++){
            arreglo[i]=nums1[i];cont++;
        }
          for(int i=0;i<nums2.length;i++){
            arreglo[cont++]=nums2[i];
        }
        Arrays.sort(arreglo);

        
         if (arreglo.length%2==0) {
             double ps1=arreglo[arreglo.length/2];
             double ps2=arreglo[(arreglo.length/2)-1];
             if(ps1==0 || ps2==0 ){
                return 0;
             }else{
             return (ps1+ps2)/2;
             }

         }else{
             return arreglo[arreglo.length/2];
         }

    }
}