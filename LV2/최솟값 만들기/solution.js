function solution(A,B){
    var answer = 0;
    A.sort(function (a,b){ return a-b });
    B.sort(function(a,b) { return b-a});
    
    for(var i = 0; i<A.length; i++){
        answer+=(A[i]*B[i])
    }
    //answer = A.reduce((acc,val,idx)=>acc+val*B[idx],0)
   

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12941