function solution(n) {
    var answer = 0;
    var i = 1;
    while(true){
        if(n%i==1){
            answer = i;
            break;
        }
        i++
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/87389