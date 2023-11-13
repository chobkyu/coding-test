function solution(s, n) {
    var answer = '';
    
    for(var i = 0; i<s.length; i++){
        if(s[i] == ' '){
            answer+=' '
        }else{
            var val = s.charCodeAt(i);
            var a = 0;
            if(64<val && val<91){
                a = higher(val,n);
            }else{
                a = lowwer(val,n);
            }

            var check = String.fromCharCode(a);
            answer+=check
        }     
    }
    return answer;
}

function lowwer(s,n){
   var res = 0;
   if((s+n)<123){
       res = (s+n);
   }else{
       res = (s+n-26);
   } 
    return res;
}

function higher(s,n){
    var res1 = 0;
    if((s+n)<91){
        res1= (s+n);
    }else{
        res1 = (s+n-26);
    }
    return res1
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12926