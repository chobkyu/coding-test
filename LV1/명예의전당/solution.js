function solution(k, score){
    var answer = [];
    var arr = [];
    
    for(let i = 0; i<score.length; i++){
        if(arr.length<k){
            arr.push(score[i]);
        }else{
            arr = arr.sort((a, b) => a - b);
            if(arr[0]<score[i]){
                arr[0] = score[i];
            }
            
        }
        arr = arr.sort((a, b) => a - b);
        answer.push(arr[0]);
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/138477