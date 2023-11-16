function solution(n, t, m, p) {
    var answer = '';
    var arr = [];
    var i = 0;
    while(true){
        var check = i.toString(n);
        arr.push(...check.toUpperCase());
        i++;
        if(arr.length>=(t*m)) break;
    }
       
    var idx = p-1;
    for(var i =0; i<t; i++){
        answer+=arr[idx]
        idx = idx+m
    }
    return answer;
}


//https://school.programmers.co.kr/learn/courses/30/lessons/17687?language=javascript#