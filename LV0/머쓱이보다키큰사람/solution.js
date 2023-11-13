function solution(array, height) {
    var answer = array.filter(v=>v>height).length;
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120585