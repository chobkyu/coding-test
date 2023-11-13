function solution(survey, choices) {
    var answer = '';
    var obj = {
        RT : 0,
        CF : 0,
        JM : 0,
        AN : 0
    };
    
    for(var i =0; i<survey.length; i++){
        switch(survey[i]){
            case 'RT' :
                obj.RT +=(choices[i]-4)
                break;
            case 'TR' :
                obj.RT -=(choices[i]-4)
                break;
            case 'CF' :
                obj.CF +=(choices[i]-4)
                break;
            case 'FC' :
                obj.CF -=(choices[i]-4)
                break;
            case 'JM' :
                obj.JM +=(choices[i]-4)
                break;
            case 'MJ' :
                obj.JM -=(choices[i]-4)
                break;
            case 'AN' :
                obj.AN +=(choices[i]-4)
                break;
            case 'NA' :
                obj.AN -=(choices[i]-4)
                break;
        }
    }
    
    var objKey = Object.keys(obj);
    
    for(var i = 0; i<objKey.length; i++){
        if(obj[objKey[i]]>0){
            var sol = objKey[i].split('')[1];
            answer+=sol;
        }else{
            var sol = objKey[i].split('')[0];
            answer+=sol;
        }
    }
    
    return answer;
}