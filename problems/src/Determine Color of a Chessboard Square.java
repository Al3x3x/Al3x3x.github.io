class Solution {
 public boolean squareIsWhite(String coordinates) {
        
        boolean[][] tablero = new boolean[8][8];
        boolean check=true;
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                tablero[i][j]=check;
                check=!check;
            }
            check=!check;
        }
        int num=Integer.parseInt(coordinates.charAt(1)+"")-1;
        int letra = 0;
        
        switch(coordinates.charAt(0)){
            case 'a' -> letra=0;
            case 'b' -> letra=1;
            case 'c' -> letra=2;
            case 'd' -> letra=3;
            case 'e' -> letra=4;
            case 'f' -> letra=5;
            case 'g' -> letra=6;
            case 'h' -> letra=7;
    }
        
        
        return !tablero[letra][num];
    }
    
}