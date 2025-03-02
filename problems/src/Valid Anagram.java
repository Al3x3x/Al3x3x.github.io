class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length()!=t.length()) {
         return false;
     }
    
     Stack <Character> palabra1 = new Stack();
     Stack <Character> palabra2 = new Stack();
     
     for (int i = 0; i < s.length(); i++) {
         palabra1.add(s.charAt(i));
         palabra2.add(t.charAt(i));
     }
     
     
        while (!palabra2.isEmpty()) {
            if (!palabra1.isEmpty()) {
                    Stack <Character> aux1 = new Stack();
                char pop2 = palabra2.pop();
                   
                 
                while (!palabra1.isEmpty()) {
       
                 char pop1 = palabra1.pop();
                    if (pop2 == pop1) {
                        break;
                    }else{
                        aux1.push(pop1);
                    }
                }
                while(!aux1.isEmpty()){
                    palabra1.push(aux1.pop());
                }

            } else {
                return false;
            }

        }

        if (palabra1.isEmpty() && palabra2.isEmpty()) {
         return true;
     }
     return false;
    }
}