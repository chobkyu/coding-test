function solution(age) {
    var answer = '';
    const arr = [...String(age)]
    arr.forEach((e) => {
        var a = String.fromCharCode(97+parseInt(e));
        answer+=a
    })
    
    return answer;
}
