function solution(common) {
    var answer = 0;
    if((common[1]-common[0]) ==(common[2]-common[1])){
        console.log('?')
        var dungcha = common[1]-common[0]
        answer = common.at(-1)+dungcha
    }else{
        var dungbi = common[1]/common[0]
        answer = common.at(-1)*dungbi
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120924