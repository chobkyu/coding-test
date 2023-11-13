function solution(t, p) {
    var answer = 0;
    
    var pLeng = p.length;
    var tempp = pLeng-1;
    var arr = [...t];
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i+tempp]==undefined){
            console.log(arr[i+tempp])
            break;
        }
        var temp = '';
        var j =0;
        var k = i;
        while(j<pLeng){
            temp = temp + arr[k];
            k++;
            j++;
        }
        if(p>=temp){
           answer+=1;
        }
    }
    return answer;
}