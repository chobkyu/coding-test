function solution(n) {
    var answer = 0;
    var count1 = getCount(n);
 
    while(true){
        n++;
        var count2 = getCount(n);
        if(count1==count2){
            answer = n;
            break;
        }
    }
    return answer;
}

const getCount = (n) => {
    var hex = n.toString(2);
    var arr = [...hex];
    var count = 0;
    arr.forEach((i)=>{
        if(i=='1') count++;
    })
    return count;
}