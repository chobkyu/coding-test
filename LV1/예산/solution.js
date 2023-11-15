function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b)
    d.forEach((i)=>{
        budget-=i;
        if(budget<0) return false;
        else answer++;
    })
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript