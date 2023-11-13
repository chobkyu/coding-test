function solution(dot) {
    var answer = 0;
    var check = dot[0]*dot[1];
    
    if(check>0){
        if(dot[0]>0){
            answer = 1;
        }else{
            answer = 3
        }
    }
    if(check<0){
        if(dot[0]>0){
            answer = 4
        }else{
            answer = 2
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120841