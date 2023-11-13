function solution(my_string, overwrite_string, s) {
    var len = overwrite_string.length
    var temp1 = my_string.substr(0,s);
    var temp2 = my_string.substr(len+s);
  
    return temp1 + overwrite_string + temp2
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181943