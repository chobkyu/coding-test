function solution(skill, skill_trees) {
    var answer = 0;

    for (var i = 0; i < skill_trees.length; i++) {
        var skillArr = [...skill]
        var flag = true
        var tempArr = [...skill_trees[i]]
        for (var j = 0; j < tempArr.length; j++) {
            var idx = skillArr.indexOf(tempArr[j]);
            if (idx != -1) {
                if (idx == 0) {
                    skillArr.splice(idx, 1)
                } else {
                    flag = false
                    break;
                }
            }
        }
        if (flag) {
            answer++;
        }
    }
    return answer;
}


//https://school.programmers.co.kr/learn/courses/30/lessons/49993