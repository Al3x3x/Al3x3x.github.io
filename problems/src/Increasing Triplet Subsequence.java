class Solution {
    public boolean increasingTriplet(int[] nums) {
         HashMap<Character, Integer> contador = new HashMap<>();

        for (char letra : texto.toCharArray()) {
            if (contador.containsKey(letra)) {
                contador.put(letra, contador.get(letra) + 1);
            } else {
                contador.put(letra, 1);
            }
        }
    }
}