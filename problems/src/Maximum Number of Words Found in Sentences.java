class Solution {
    public int mostWordsFound(String[] sentences) {
          ArrayList <String[]> cont = new ArrayList();
       
         for (int i = 0; i < sentences.length; i++) {
             String[] words = sentences[i].split(" ");
                 cont.add(words);
         }
         int may=0;
         
         for (int i = 0; i < cont.size(); i++) {
             if (cont.get(i).length>may) {
                 may=cont.get(i).length;
             }
         }
         return may;
    }
}