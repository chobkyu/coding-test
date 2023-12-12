function solution(n) {
    
    
    let arr = Array(n + 1).fill(true);
     //index 0이 존재하므로 배열을 num + 1로 만든다.
 
     arr[0] = false;
     arr[1] = false;
     //배열의 index 0과 1은 소수가 아니므로 false로 만든다.
 
     for(let i = 2; i * i <= n; i++) { //제곱근까지만 반복
         if(arr[i]) {
             for(let j = i * i; j <= n; j += i) {
                 //반복을 i * i 부터 시작하는 것은 그 이전의 값은 j이전의 수에서 이미 확인했기 때문
                 arr[j] = false; //배수이므로 소수가 아닌것으로 만든다.
             }
         }
     }
     return arr.filter(el => el).length //filter로 arr중 값이 true인 것의 개수를 구한다.
 
 }
 
 //https://school.programmers.co.kr/learn/courses/30/lessons/12921
 
 