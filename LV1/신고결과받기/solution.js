function solution(id_list, report, k) {
    var answer = [];
    var count = {};
    var check = {};

    for (var i = 0; i < id_list.length; i++) {
        count[id_list[i]] = 0;
        check[id_list[i]] = [];
        answer.push(0);
    }

    for (var i = 0; i < report.length; i++) {
        var words = report[i].split(' ');

        var singo = words[0];
        var pihae = words[1];


        count[pihae] = count[pihae] + 1;
        if (!check[pihae].includes(singo)) {
            check[pihae].push(singo);
        }

    }

    var num = {}

    for (var i = 0; i < id_list.length; i++) {

        if (check[id_list[i]].length >= k) {
            for (var j = 0; j < check[id_list[i]].length; j++) {

                if (num[check[id_list[i]][j]] != undefined) num[check[id_list[i]][j]] += 1;
                else num[check[id_list[i]][j]] = 1;
            }
        }
    }
    //console.log(num)

    for (var i = 0; i < id_list.length; i++) {
        if (num[id_list[i]] != undefined)
            answer[i] = num[id_list[i]]
    }

    return answer;
}