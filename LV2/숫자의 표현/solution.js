function solution(n) {
    var answer = 1;
    for(var i = 1; i<=n/2; i++){
        var tmp = 0;
        for(var j = i; j<=n; j++){
            tmp+=j;
            if(tmp==n){
                answer++;
                break;
            }else if(tmp>n){
                break;
            }
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12924