class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
 
        Map<Character, Character> mapa = new HashMap<>();
        Map<Character, Boolean> asignado = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char charS = s.charAt(i);
            char charT = t.charAt(i);

            if (mapa.containsKey(charS)) {
                if (mapa.get(charS) != charT) {
                    return false;
                }
            } else {
                if (asignado.containsKey(charT) && asignado.get(charT)) {
                    return false;
                }
                mapa.put(charS, charT);
                asignado.put(charT, true);
            }
        }
        return true;
    }

}