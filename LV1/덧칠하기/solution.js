function solution(n, m, section) {
    var answer = 0;
   
   
    while(true){
        answer++;
        const temp =filterValues(section,m+section[0]-1);
        //filter를 써봤지만 콜백함수로 인해 시간초과 발생
        section = temp
       
        if(temp.length===0) break;
       
    }
    return answer;
}

function filterValues(arr, threshold) {
  let j = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      arr[j++] = arr[i]; 
    }
  }
  arr.length = j; 
  return arr;
}
