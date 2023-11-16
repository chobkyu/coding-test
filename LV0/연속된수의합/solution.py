def solution(num, total):
    answer = []
    first = (total/num)-((num-1)/2)
    i=0
    while i<num :
        answer.append(first)
        first+=1
        i+=1
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=python3