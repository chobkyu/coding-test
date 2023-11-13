function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>{
        if(a>b) return -1;
        if(a==b) return 0;
        if(a<b) return 1;
    });
    answer=numbers[0]*numbers[1];
    return answer;
}