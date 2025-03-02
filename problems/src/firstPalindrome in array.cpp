class Solution {
public:
    string firstPalindrome(vector<string>& words) {
    string res="";
  for (int i = 0; i <words.size(); ++i) {
   int x=0;
   int y=words[i].size()-1;
   
   while(x<=y) {
       if(words[i][x]!= words[i][y]){
           break;
       }
       x++;
       y--;
       
       if(x>y){
      return words[i];
       }
   }
  }

    return res;
}
};