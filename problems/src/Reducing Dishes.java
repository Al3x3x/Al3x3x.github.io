class Solution {
    public int maxSatisfaction(int[] satisfaction) {
        Arrays.sort(satisfaction);
        boolean check=false;
          for (int i = 0;i<satisfaction.length; i++) {
              if (satisfaction[i]>0) {
                  check=true;
                  break;
              }else if(check==false && satisfaction[i]<=0 && i==satisfaction.length-1){
                  return 0;
              }  
          }
    
        int time=1;
        
        int max=0;
          for (int i = 0; i < satisfaction.length; i++) {
              time=1;
              int tmp=0;
              
              for (int j = i; j < satisfaction.length; j++) {
                  tmp+=satisfaction[j]*time++;
              }
              max=Math.max(tmp, max);
          }
          return max;
    }
      
}