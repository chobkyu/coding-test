def solution(n):
    answer = 0
    i = 1
    while i<=n :
        tmp = 0
        j = i
        while j<=n :
            tmp+=j
            if tmp == n:
                answer+=1
                break
            elif tmp>n:
                break
            j+=1
        i+=1
    return answer


# https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=python3