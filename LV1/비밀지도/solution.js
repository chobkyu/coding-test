function solution(n, arr1, arr2) {
    var answer = [];
    var first = [];
    var second = [];
    for(var i = 0; i<n ; i++){
        var a = arr1[i].toString(2).padStart(n,"0");
        first.push([...a]);
        var b = arr2[i].toString(2).padStart(n,"0");
        second.push([...b]);
    }
    
    for(var i = 0; i<n; i++){
        var k='';
        for(var j=0; j<n; j++){
            if(first[i][j]=='0' && second[i][j]=='0'){
                k+=' ';
            }else{
                k+='#';
            }
        }
        answer.push(k);
    }
    return answer;
    
}

//https://school.programmers.co.kr/learn/courses/30/lessons/17681