class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
          List <Integer>  retorno = new ArrayList();
             for (int i = 0; i < words.length; i++) {
                 if (words[i].contains(x+"")) {
                     retorno.add(i);
                 }
             }
             return retorno;
    }
}