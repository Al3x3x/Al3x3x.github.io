class Solution {
    public int minPartitions(String n) {
        int max=0;
        for(int i=0;i<n.length();i++){
            int aux=Integer.parseInt(n.charAt(i)+"");
            if(aux>max){
                max=aux;
            }
        }
        return max;
    }
}