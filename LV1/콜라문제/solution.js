function solution(a, b, n) {
    var answer = 0;
    var bottle = n;//현재 가지고 있는 병 수
    while(bottle>=a){
        var pay = bottle - (bottle%a);
        var then = bottle%a;
        var take = (pay/a)*b;
        bottle = then + take;
        answer+=take
    }
    
    return answer;
}