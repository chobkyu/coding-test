function solution(left, right) {
    var answer = 0;
    var k = right-left
   
    for(var i = 0; i<k+1; i++){
        var yaksu = 0;
        for(var j =1; j<=left; j++){
            
            if((left%j)==0) yaksu++;
        }
        
        if(yaksu%2 ==0) {answer+= left}
        else {answer-=left}
        left++;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/77884