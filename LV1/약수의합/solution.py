def solution(n):
    answer = 0
    i= 1;
    while i<=n :
        if n%i == 0 :
            answer += i
        i+=1
    return answer

# https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=python3