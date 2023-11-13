function solution(n, words) {
    var answer = [];
    var check = [];
    var time = 0;
    var word = 0;
    for(var i = 0; i<words.length ; i++) {
        if((i)%n ==0 ) {time++}
        var str = words[i];
        if(i>0){
            var last = words[i-1];
            var first = words[i];
            if(last.substr(last.length-1,1) != first.substr(0,1)){
                word = (i)%n +1;
                break;
            }
        }
        if(check.includes(str)){
            word = (i)%n +1;
            break;
        }else{
            check.push(str);
        }
    }
    if(word==0) time=0;
    answer = [word, time]
    return answer;
}


//https://school.programmers.co.kr/learn/courses/30/lessons/12981
