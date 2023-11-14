function solution(a, b) {
    var answer = '';
    var days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var daysMon = 0;
    
    if(a>1){
        for(var i = 0; i<a-1; i++){
            daysMon += mon[i];
        }
    }
    console.log(daysMon)
    var idx = (daysMon+b-1)%7
    if(idx<0) idx = 6
    answer = days[idx]
    
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12901