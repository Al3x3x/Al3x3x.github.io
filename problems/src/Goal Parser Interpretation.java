class Solution {
    public String interpret(String command) {
         String aux="";
         
        for (int i = 0; i < command.length(); i++) {
            if (command.charAt(i)=='G') {
               aux+="G";
            }else if (command.charAt(i)=='('&&command.charAt(i+1)==')') {
                aux+="o";
                i++;
            }else if (command.charAt(i)=='('&&command.charAt(i+1)=='a') {
                aux+="al";
                i=i+3;
            }
        }
        return aux;
    }
}