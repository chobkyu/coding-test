function solution(n, lost, reserve) {
    var answer = 0;
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
   
    for(var i = 0; i<lost.length; i++){
        //여벌 옷을 가져온 사람이 도난 당했을 경우
        if(reserve.includes(lost[i])){
            reserve = reserve.filter((e)=> e!==lost[i]);
            lost[i] =0
        }
    }
    lost = lost.filter(e=>e!==0)
    
    var only = n-lost.length-reserve.length
    answer+=only
   
    answer += reserve.length
    
    for(var i = 0; i<lost.length; i++){
        if(reserve.includes(lost[i]-1)){
            answer++;
            reserve = reserve.filter((e)=>e!==(lost[i]-1))
        }else{
            if(reserve.includes(lost[i]+1)){
                answer++;
                reserve = reserve.filter((e)=>e!==(lost[i]+1))
            }
        }
    }
    
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42862