class Solution {
        public String gcdOfStrings(String str1, String str2) {
       ArrayList <String> verdaderos = new ArrayList();
         String aux = "";

         if(str2.length()>str1.length()){
          for (int i = 0; i < str1.length(); i++) {
              aux+=str1.charAt(i);
             if (llamar(str1,str2,aux)) {
                 verdaderos.add(aux);
             }
         }
         
         if (!verdaderos.isEmpty()) {
             return verdaderos.get(verdaderos.size()-1);
         }
         
         return "";
         }else{
            for (int i = 0; i < str1.length(); i++) {
              aux+=str1.charAt(i);
             if (llamar(str1,str2,aux)) {
                 verdaderos.add(aux);
             }
         }
         
         if (!verdaderos.isEmpty()) {
             return verdaderos.get(verdaderos.size()-1);
         }
         
         return "";
         }
         
    }
     
    public static boolean llamar(String str1,String str2, String aux){
        String replaceAll = str1.replaceAll(aux, "");
        String replaceAll2 = str2.replaceAll(aux, "");
        return !(!replaceAll.isEmpty() || !replaceAll2.isEmpty());
    }

}