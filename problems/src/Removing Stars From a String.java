class Solution {
    public String removeStars(String s) {
      ArrayList <Character> array = new ArrayList();
        ArrayList <Character> aux = new ArrayList();
        int cont =0;
        
         for (int i = 0; i < s.length(); i++) {
             array.add(s.charAt(i));
         }
         int i=array.size()-1;
         
         while(i>=0){
         if(array.get(i)=='*'){
             cont++;
             i--;
         }else if(array.get(i)!='*' && cont !=0){
             i--;
             cont--;
         }else if(cont==0){
             aux.add(array.get(i));
             i--;
         }       
        }

         String a="";
   
          for (int j = aux.size()-1; j >=0 ; j--) {
              a+=aux.get(j);
          }
         
         return a;
    }
}