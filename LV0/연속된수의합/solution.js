function solution(num, total) {
    var answer = [];
    var first = (total/num)-((num-1)/2)
    
    for(var i =0; i<num; i++){
        answer[i]= first;
        first++;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120923