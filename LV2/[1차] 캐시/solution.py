def solution(cacheSize, cities):
    answer = 0
    dequeue = []
    
    for city in cities:
        if dequeue.count(city.lower()) > 0:
            dequeue.remove(city.lower())
            dequeue.append(city.lower())
            answer+=1
        else:
            if cacheSize!=0 :
                if len(dequeue)<cacheSize:
                    dequeue.append(city.lower())
                else :
                    dequeue.pop(0)
                    dequeue.append(city.lower())
            answer+=5
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=python3