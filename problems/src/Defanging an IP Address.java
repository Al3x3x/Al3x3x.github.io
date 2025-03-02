class Solution {
    public String defangIPaddr(String address) {
        String res = "";
        String[] arreglo = address.split("\\.");

        for (int i = 0; i < arreglo.length; i++) {
            if (i < arreglo.length - 1) {
                res += arreglo[i] + "[.]";
            } else {
                res += arreglo[i];
            }
        }

        return res;
    }
}