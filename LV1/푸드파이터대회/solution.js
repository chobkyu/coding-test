function solution(food) {
    var answer = '';
    var temp = '';
    for(let i = 1; i<food.length; i++){
        var gaesu = Math.floor(food[i]/2);
        for(let j = 0; j<gaesu; j++){
            temp+=i;
        }
    }
    var reverseTemp = reverse(temp);
    answer = temp + '0' +reverseTemp;
    return answer;
}

function reverse(str) {
    let reverse = str.split('');
    reverse = reverse.reverse();
    return reverse.join('')
}

//https://school.programmers.co.kr/learn/courses/30/lessons/134240