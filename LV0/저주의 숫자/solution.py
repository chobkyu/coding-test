def solution(n):
    answer = n
    i=1
    while i<=n :
        if i%3 == 0 :
            print(i)
            answer+=1
            n+=1
        else :
            strNum = str(i)
            if(strNum.find('3')!=-1):
                print(i)
                answer+=1
                n+=1
        i+=1
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=python3