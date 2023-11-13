function solution(x, n) {
    var answer = [];
    var temp = x
    for(var i = 0; i<n; i++){
        answer.push(temp);
        temp+=x
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12954