function solution(sides) {
    var answer = 0;
    var bigNum = Math.max(...sides);
    var smallNum = Math.min(...sides);
    
    //bigNum이 가장 긴 변일 때
    var i = bigNum - smallNum +1;
    var check = smallNum+i;
    for(var k = i ; k<check; k++){
         answer++;
    }
    
    //나머지 한 변이 가장 긴 변일 때
    var j = bigNum + 1;
    var check2 = bigNum+smallNum
    for(var l = j; l< check2; l++){
        answer++;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120868