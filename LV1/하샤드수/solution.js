function solution(x) {
    var answer = true;
    var str = x.toString();
    var a = [...str]
    
    var sum = 0;
    for(var i = 0; i<a.length; i++){
        sum += Number(a[i]);
    }
   
    if(x%sum != 0) answer = false
    return answer;
}