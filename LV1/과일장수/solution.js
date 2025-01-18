function solution(k, m, score) {
    var answer = 0;
    const sortedScore = score.sort((a,b) => b-a)
    
    let i = 0;
    while(true) {
        i+=m;
        if(i>sortedScore.length) break;
        answer += (sortedScore[i-1]*m)
    }
    return answer;
}
