class Solution {
    public List<String> fizzBuzz(int n) {
        List <String> salida = new ArrayList();
        
         for (int i = 1; i <= n; i++) {
             if (i%3==0 && i%5==0) {
                 salida.add("FizzBuzz");
             }else if(i%3==0){
                 salida.add("Fizz");
             }else if(i%5==0){
                 salida.add("Buzz");
             }else{
                 salida.add(i+"");
             }
         }
         
        return salida;  
    }
}