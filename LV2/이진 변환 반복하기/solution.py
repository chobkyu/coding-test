def solution(s):
    answer = []
    countZero = 0
    num = 0
    
    while True :
        count = s.count('0')
        countZero += count
        
        leng = len(s.replace('0',''))
        num+=1
        if leng == 1:
            break
        s=format(leng,'b')
        
    answer = [num,countZero]
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=python3