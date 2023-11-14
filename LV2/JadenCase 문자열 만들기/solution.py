def solution(s):
    answer = ''
    arr = s.split(' ');
    newArr = []
    for word in arr : 
        word = word.lower()
        word = word.capitalize()
        print(word)
        newArr.append(word)
    
    answer = ' '.join(newArr)
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=python3