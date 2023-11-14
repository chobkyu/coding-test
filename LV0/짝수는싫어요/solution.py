def solution(n):
    answer = []
    i=1
    while i<=n:
        if i%2 != 0:
            answer.append(i)
        i+=1
    return answer

## https://school.programmers.co.kr/learn/courses/30/lessons/120813