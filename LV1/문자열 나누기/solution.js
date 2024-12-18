function solution(s) {
    var answer = 0;
    var arr = [...s];
    let startIndex = 0; // 시작 인덱스
    
    while(startIndex<arr.length) {
        let x =1;
        let y =0
        for(let i = startIndex+1 ; i<arr.length; i++) {
            arr[startIndex] ===arr[i] ? x++:y++;
          
            if(x===y){
                startIndex = i + 1; // 다음 시작 지점 설정
                
                answer++
                break
            }
        }
           if (x !== y) {
            // 잔여 문자열 처리
            answer++;
            break;
        }
    }
    
   
    return answer;
}
