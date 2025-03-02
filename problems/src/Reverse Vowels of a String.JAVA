class Solution {

    public static boolean esVocal(String s){
        return (s.contains("a") || s.contains("e") || s.contains("i") || s.contains("o") || s.contains("u") ||
        s.contains("A") || s.contains("E") || s.contains("I") || s.contains("O") || s.contains("U"));
    }
// a,e,e,e,I,a,a,i,e,e,e,a
    public String reverseVowels(String s) {
        String aux = "";
        ArrayList<String> arr = new ArrayList();
        for(int i=0; i<s.length(); i++){
            arr.add(s.charAt(i)+"");
        }
        int j = arr.size()-1;

        for(int i=0; i<arr.size(); i++){
            if(esVocal(arr.get(i))){
                String a = arr.get(i);
                while(j>=i){
                    if(esVocal(arr.get(j))){
                        arr.set(i, arr.get(j));
                        arr.set(j, a);
                        j--;
                        break;
                    }
                    j--;
                }   
            }           
        }

        for(int i=0; i<arr.size(); i++){
            aux += arr.get(i);
        }    
        return aux;
    }


}