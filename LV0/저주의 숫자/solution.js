function solution(n) {
    var answer = n;
    
    for(var i = 1; i<=n; i++){
        if(i%3==0){
            answer++;
            n++;
        }else{
            if(i.toString().indexOf('3')!=-1){
                answer++;
                n++;
            }
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120871