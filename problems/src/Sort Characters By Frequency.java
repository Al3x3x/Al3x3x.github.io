class Solution {
    public String frequencySort(String s) {
        MapCharacter, Integer frequencyMap = new HashMap();
        for (char c  s.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }
        ListCharacter characters = new ArrayList(frequencyMap.keySet());
        Collections.sort(characters, (a, b) - frequencyMap.get(b) - frequencyMap.get(a));
        StringBuilder result = new StringBuilder();
        for (char c  characters) {
            int frequency = frequencyMap.get(c);
            for (int i = 0; i  frequency; i++) {
                result.append(c);
            }
        }
        
        return result.toString();
    }
}