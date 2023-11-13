function solution(arr) {
    var answer = 0;
    answer = arr.reduce((sum,cur)=>{return sum+cur;},0)/arr.length
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12944