function solution(today, terms, privacies) {
    var answer = [];
    
    let todayDays = getDays(today);
    
    for(let i = 0; i<privacies.length; i++){
        var privacy = privacies[i].split(" ",2);
        var date = privacy[0]; //개인정보 수집 일자
        var type = privacy[1]; //약관 종류
        
        var typeDay = ackgwan(terms,type);
        var dateOne = getDays(date);
        
        
        var limitDay = typeDay + dateOne;
        
        if(todayDays>limitDay){
            answer.push(i+1);
        }
    }
    return answer;
}

//약관
function ackgwan(terms,type){
    let days = 0
    var termTep = terms.filter((term)=>{
        return term.includes(type);
    });
    
    var tem = termTep[0].split(" ",2);
    
    days = tem[1]*28-1;
    
    return days;
}

function getDays(date){
    
    var day2 = date.split(".");
    
    var year = parseInt(day2[0]);
    var month = parseInt(day2[1]);
    var day = parseInt(day2[2]);
    let yearDays = year * 28 * 12;
    let monthDays = month*28;
    
    let days = yearDays + monthDays + day;
    
    return days;
}


