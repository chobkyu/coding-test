function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    var c1 =0;
    var c2 = 0;
    for(var i =0;i<goal.length; i++){
        if(goal[i]==cards1[c1]){
            c1++;
        }else if(goal[i]==cards2[c2]){
            c2++
        }else{
            answer="No";
            break;
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/159994