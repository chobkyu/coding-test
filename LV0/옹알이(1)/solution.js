function solution(babbling) {
    var answer = 0;
    
    for(var j =0; j<babbling.length; j++){
        var arr = [...babbling[j]];
        var flag = 1;
        console.log(arr)
        for(var i = 0; i<arr.length; i++){
            console.log(arr[i])
            if(arr[i]=='a'|| arr[i]=='w'){
                var check = arr[i]+arr[i+1]+arr[i+2];
                console.log(check)
                if(check=='aya'|| check=='woo'){
                    
                    i+=2;
                }else{
                    flag = 0;
                    break;
                }
            }else if(arr[i]=='y'||arr[i]=='m'){
                var check = arr[i]+arr[i+1];
                console.log(check)
                if(check=='ye' || check=='ma'){
                    
                    i+=1;
                }else{
                    flag=0;
                    break;
                }
            }else{
                flag =0
                break;
            }
        }
        
        if(flag) answer++;
        
    }
    return answer;
}

