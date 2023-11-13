function solution(numbers, hand) {
    var answer = '';
    var left = [1,4,7];
    var right = [3,6,9];
    
    var lefthand=[1,3];
    var righthand=[3,3];
    
    for(var i = 0; i<numbers.length; i++){
        if(left.includes(numbers[i])) {
            answer+='L';
            lefthand = [];
            lefthand = getXY(numbers[i]);
        }else if(right.includes(numbers[i])) {
            answer+='R';
            righthand = [];
            righthand = getXY(numbers[i]);
        }else{
           //좌표 x좌표는 %3 y좌표는 /3
            var numberXY = getXY(numbers[i]);
            
            var rightLen = getLen(righthand,numberXY);
            var leftLen = getLen(lefthand, numberXY);
            
            //console.log(numbers[i] , rightLen , leftLen)
            if(rightLen<leftLen){
                answer+='R';
                righthand = [];
                righthand = getXY(numbers[i]);
            }else if(rightLen==leftLen){
                if(hand=='right'){
                    answer+='R';
                    righthand = [];
                    righthand = getXY(numbers[i]);
                }else{
                    answer+='L';
                    lefthand = [];
                    lefthand = getXY(numbers[i]);
                }
            }else{
                answer+='L';
                lefthand = [];
                lefthand = getXY(numbers[i]);
            }
            
        }
        
        
    }
    return answer;
}

const getLen = (hand, num) => {
    var xLen = Math.abs((hand[0]-num[0]));
    var yLen = Math.abs((hand[1]-num[1]));
    var len = (xLen)+(yLen);
    return len;
}

const getXY = (num) => {
    console.log(num)
    var arr = [];
    if(num == 0){
        arr.push(2);
        arr.push(3);
        console.log(2,3)
        return arr;
    }else{
        var x = num%3==0 ? 3 : num%3;
        var y = Math.floor((num-1)/3)
        console.log(x,y)
        arr.push(x);
        arr.push(y);
        return arr;
    }
    
}