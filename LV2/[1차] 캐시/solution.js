function solution(cacheSize, cities) {
    var answer = 0;
    var dequeue = [];
    
    for(var i = 0; i<cities.length; i++){
        //console.log(dequeue)
        if(dequeue.includes(cities[i].toLowerCase())){
            var idx = dequeue.indexOf(cities[i].toLowerCase())
            dequeue.splice(idx,1)
            dequeue.push(cities[i].toLowerCase())
            answer++;
        } 
        else{
            if(cacheSize!=0){
               if(dequeue.length<cacheSize){
                    dequeue.push(cities[i].toLowerCase())
                }else{
                    dequeue.shift()
                    dequeue.push(cities[i].toLowerCase())
                } 
            }
            answer+=5
        }
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/17680