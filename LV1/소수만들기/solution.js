function solution(nums) {
    var answer = 0;
    let result = [];
    
    const pickOrNot = (idx, bucket) => {
        if(bucket.length===3){
            result.push(bucket)
            return;
        }
        
        if(idx === nums.length) return;
        
        pickOrNot(idx+1 , bucket.concat(nums[idx]));
        pickOrNot(idx+1 , bucket);
    };
    
    pickOrNot(0,[]);
     
    for(var i =0; i<result.length; i++){
        var num = result[i][0]+result[i][1]+result[i][2]
        var flag = 1
        for(let i =2; i<=Math.sqrt(num); i++){
            if(num%i === 0){
                flag=0
                break;
            }
        }
        if(flag == 1) answer++;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12977