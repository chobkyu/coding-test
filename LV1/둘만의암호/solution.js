function solution(s, skip, index) {
    var answer = '';
    var skipArr = [];

    for (var i = 0; i < skip.length; i++) {
        var v = skip.charCodeAt(i);
        skipArr.push(v);
    }
    var a = [];
    for (var j = 97; j < 123; j++) {
        if (!skipArr.includes(j)) a.push(j);
    }
    for (var i = 0; i < s.length; i++) {
        var val = s.charCodeAt(i);
        var idx = a.indexOf(val);

        for (var j = 0; j < index; j++) {
            idx++;
            if (idx > a.length - 1) idx = 0;
        }
        answer += String.fromCharCode(a[idx]);
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/155652