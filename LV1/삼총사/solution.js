function solution(number) {
    var answer = 0;
    var arr = []
    var arr = getCombinations(number,3);
    
    for(var i =0; i<arr.length;i++){
        var a = sum(arr[i])
        if(a==0) answer++
        
    }
   
    return answer;
}

function sum(arr){
    var a = arr[0]+arr[1]+arr[2]
    return a;
}

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results; 
}

//https://school.programmers.co.kr/learn/courses/30/lessons/131705