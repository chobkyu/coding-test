function solution(a, b) {
    var answer = 0;
    for(let i =0;i<a.length;i++){
        answer = answer + (a[i]*b[i])
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/70128