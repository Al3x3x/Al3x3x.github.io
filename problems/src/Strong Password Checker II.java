class Solution {
    public boolean strongPasswordCheckerII(String password) {
        boolean upper=false;
        boolean lower=false;
        boolean digit=false;
        boolean tamano = password.length()>=8;
        boolean especial=false;
        boolean repetido=true;
        
          for (int i = 0; i < password.length(); i++) {
              if (Character.isUpperCase(password.charAt(i))) {
                  upper=true;
              }
              if (Character.isLowerCase(password.charAt(i))) {
                  lower=true;
              }
              if (Character.isDigit(password.charAt(i))) {
                  digit=true;
              }
              if (!Character.isAlphabetic(password.charAt(i))&& !Character.isDigit(password.charAt(i))) {
                  especial=true;
              }
          }
          int j=1;
          for (int i = 0; i < password.length()-1; i++) {
             char a=password.charAt(i);
             char b=password.charAt(j++);
              if (a==b) {
                  repetido=false;
              }
          }
     return upper && lower && digit &&tamano &&especial &&repetido;    
    }
}