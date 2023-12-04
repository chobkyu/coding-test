function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    const stack = [];
    
    //console.log(answer)
    
    numbers.forEach(number=>{
        const sLastIdx = stack.length-1;
        //console.log(number,stack[sLastIdx])
        if(number > stack[sLastIdx]){
            //console.log('?')
            let backIdx = 0;
           
            while(number > stack[sLastIdx-backIdx]){
                //console.log(answer)
                if(answer[sLastIdx-backIdx]===-1){
                    answer[sLastIdx-backIdx] = number
                }
                backIdx++
            }
        }
        
        stack.push(number);
        // console.log(stack)
    })
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/154539