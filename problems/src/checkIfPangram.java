class Solution {
    public boolean checkIfPangram(String sentence) {
       if (sentence.contains("a") && sentence.contains("b") && sentence.contains("c") && sentence.contains("d") && sentence.contains("e") && sentence.contains("f") && sentence.contains("g")
                   && sentence.contains("h") && sentence.contains("i") && sentence.contains("j") && sentence.contains("k") && sentence.contains("l") && sentence.contains("m") && sentence.contains("n") && sentence.contains("o")
                   && sentence.contains("p") && sentence.contains("q") && sentence.contains("r") && sentence.contains("s") && sentence.contains("t") && sentence.contains("u") && sentence.contains("v") && sentence.contains("w")
                   && sentence.contains("x") && sentence.contains("y") && sentence.contains("z")) {

          return true;
       } 
       
       return false;
}
}