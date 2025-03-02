class Solution {
    public String reverseWords(String s) {
     ArrayList<String> arr = new ArrayList();
        for (int i = s.length() - 1; i >= 0; i--) {
            String aux = "";
            if (s.charAt(i) == ' ') {
            } else {
                for (int k = i; k >= 0; k--) {
                    if (s.charAt(k) == ' ') {
                        break;
                    } else {
                        aux += s.charAt(k);
                        i = k;
                    }
                }
                if (aux != "") {
                    arr.add(aux);
                }
            }
        }
        for (int i = 0; i < arr.size(); i++) {
            String aux = "";
            for (int j = arr.get(i).length() - 1; j >= 0; j--) {
                aux += arr.get(i).charAt(j);
            }
            arr.set(i, aux);
        }
        String salida = "";
        for (int i = 0; i < arr.size(); i++) {
            if (i != arr.size() - 1) {
                salida += arr.get(i) + " ";
            } else {
                salida += arr.get(i);
            }
        }
        return salida;
    }
}