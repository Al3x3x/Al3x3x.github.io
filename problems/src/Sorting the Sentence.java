class Solution {
    public String sortSentence(String s) {
           s=s.replace(' ', '-');
        String[] arr = s.split("-");
         String[] nuevo = new String[arr.length];
         
         for (int i = 0; i < arr.length; i++) {
             String aux="";
             for (int j = 0; j < arr[i].length(); j++) {
                 if (Character.isDigit(arr[i].charAt(j))) {
                     int a= Integer.parseInt(arr[i].charAt(j)+"")-1;
                     nuevo[a]=aux;
                 }else{
                     aux+=arr[i].charAt(j);
                 }
             }
         }
        
         s="";
         for (int i = 0; i < nuevo.length; i++) {
             if (i!=nuevo.length-1) {
                       s+=nuevo[i];
                       s+=" ";
             }else{
                       s+=nuevo[i];
             }
       
             
         }
         
         
         return s;
    }
       
    

    
}