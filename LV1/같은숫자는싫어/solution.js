function solution(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != answer[answer.length - 1]) {
            answer.push(arr[i])
        }

    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12906