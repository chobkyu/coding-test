function solution(s) {
    var a = [];
    s=s.split('').reverse()
      
    for(let i = 0;i<s.length;i++){
        var flag = 0;
        var count = -1;
        for(let j = i+1; j<s.length;j++){
            if(s[i]==s[j]){
                count = j-i;
                a.push(count)
                flag=1
                break;
            }
       }
        if(flag==0){
            a.push(count)
        }
    }
    
    var answer = [];
    answer = a.reverse()
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/142086