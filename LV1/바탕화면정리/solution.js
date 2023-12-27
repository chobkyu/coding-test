function solution(wallpaper) {
    var answer = [];
    var lux = 0;
    var luy = 0;
    var rdx = 0;
    var rdy = 0;
    
    //console.log(wallpaper)
    const tempArr = [];
    for(var i = 0; i<wallpaper.length; i++){
        const arr = [...wallpaper[i]];
        tempArr.push(arr);
    }
    
    //console.log(tempArr)
    const x = [];
    const y = [];
    for(var i =0; i<tempArr.length; i++){
       //console.log(tempArr[i][0])
       for(var j =0; j<tempArr[i].length; j++){
           //console.log(tempArr[i][j])
           if(tempArr[i][j]=='#'){
               x.push(i);
               y.push(j);
           }
       }
    }
     
    lux = Math.min(...x);
    luy = Math.min(...y);
    rdx = Math.max(...x)+1;
    rdy = Math.max(...y)+1;
    
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx);
    answer.push(rdy);
    
    return answer;
}