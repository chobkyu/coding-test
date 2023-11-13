function solution(numbers) {
    var answer = [];
    
    let result = [];
    const pick = (idx, bucket) => {
        if(bucket.length === 2){
            result.push(bucket)
            return;
        }
        if (idx === numbers.length) return;  // 재귀를 멈추게 하는 조건문
        pick(idx+1, bucket.concat(numbers[idx]))
        pick(idx+1, bucket)
    }
    
    pick(0,[])
    
    for(var i = 0; i<result.length; i++){
        var temp = result[i].reduce((sum, currValue)=>{
            return sum + currValue;
        },0);
        if(!answer.includes(temp)){
            answer.push(Number(temp));
        }
        
    }
    
    answer.sort((a,b) => a-b)
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/68644