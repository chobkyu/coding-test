function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    
    for(var i = 0; i<arr.length; i++){
        var a= arr[i].charAt(0).toUpperCase();
        var b = arr[i].slice(1).toLowerCase();
        answer+= a+b;
        if(i!=arr.length-1) answer+=' '
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12951