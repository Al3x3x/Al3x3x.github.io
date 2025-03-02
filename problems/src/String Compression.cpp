class Solution {
public:
    void insertNumberInVector(int& i, int n, vector<char>& v){
    int aux;

    if(n>=1000){//4 digits
        aux = floor(n/1000.0);    
        n%=1000;
        v[i++] = '0' + aux;

        aux = floor(n/100.0);
        n%=100;
        v[i++] = '0' + aux;

        aux = floor(n/10.0);
        n%=10;
        v[i++] = '0' + aux;

        v[i++] = '0' + n;
    }else if(n>=100){
        aux = floor(n/100.0);
        n%=100;
        v[i++] = '0' + aux;

        aux = floor(n/10.0);
        n%=10;
        v[i++] = '0' + aux;

        v[i++] = '0' + n;
    }else if(n>=10){
        aux = floor(n/10.0);
        n%=10;
        v[i++] = '0' + aux;

        v[i++] = '0' + n;
    }else{
        v[i++] = '0' + n;
    }
}

int compress(vector<char>& chars) {
    if(chars.size()==1) return 1;

    int l, r, i;
    l = i = 0;
    r = 1;
    int cont = 1;

    while(r<chars.size()){
        if(chars[l]==chars[r]){
            cont++;
            r++;
        }else{
            if(cont==1){
                chars[i] = chars[l];
                l++;
                r++;
                i++;
            }else{
                chars[i] = chars[l];
                i++;
                insertNumberInVector(i,cont,chars);
                l = r;
                r++;
                cont=1;
            }
        }
    }

    chars[i] = chars[l];
    i++;
    if(cont>1)
        insertNumberInVector(i,cont,chars);
    
    return i;
}

};