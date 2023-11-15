function solution(s) {
    var answer = [];
    var countZero = 0;
    var num = 0
    while (true) {
        var count = s.split('0').length-1;
        countZero+=count
        
        var len = s.replaceAll('0','').length;
        num++
        if(len=="1") break;
        s=len.toString(2)
    }
    answer = [num,countZero]
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/70129