function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i = 0; i<photo.length; i++){
        var score = 0;
        for(let j = 0; j<photo[i].length;j++){
            
            if(name.filter(v=> v==photo[i][j])){
                var scoreIdx = 0; //name.IndexOf(photo[i][j]);
                for(let k = 0; k<name.length; k++){
                    if(photo[i][j]==name[k]){
                        scoreIdx = k;
                        console.log(name[k]+' , '+k)
                        break;
                    }
                    scoreIdx=-1;
                }
                if(scoreIdx>-1){
                    score+=yearning[scoreIdx];
                }
                
            }
        }
        answer.push(score);
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/176963