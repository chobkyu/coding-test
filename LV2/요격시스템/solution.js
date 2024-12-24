function solution(targets) {
    let answer = 0;
    let check = 0;
    
    const sortedTarget = targets.sort((a,b) => b[1]-a[1]).reverse();
    
    for(const target of sortedTarget){
        if(target[0]< check && target[1]>=check) {}
        else {
            answer++;
            check = target[1]
        }
    }
    
    return answer;
}
