def solution(A,B):
    answer = 0
    
    A.sort()
    B.sort(reverse=True)
    
    i=0
    while i<len(A):
        answer+=(A[i]*B[i])
        i+=1
    return answer

# https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=python3