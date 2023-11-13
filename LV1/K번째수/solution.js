function solution(array, commands) {
    var answer = [];
    
    for(var i = 0; i<commands.length;i++){
         var arr = array.slice(commands[i][0]-1,commands[i][1]);    
         arr.sort((a,b) => a-b);
         answer[i] = arr[commands[i][2]-1]
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42748