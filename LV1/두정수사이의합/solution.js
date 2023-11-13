function solution(a, b) {
    var answer = 0;
    if(a<b){
        var c = a;
        for(var i = 0; i<=b-a;i++){
            answer+=c;
            c++;
        }
    }else{
        var c = b;
        for(var i = 0; i<=a-b;i++){
            answer+=c;
            c++;
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12912