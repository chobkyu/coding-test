import string

def solution(n, t, m, p):
    answer = ''
    arr = []
    i = 0
    while True :
        check = convert(i,n).upper()
        for a in check :
            arr.append(a)
        i+=1
        if len(arr)>=(t*m):
            break;
    
    idx = p-1
    j=0
    while j<t :
        answer+=arr[idx]
        idx = idx+m
        j+=1
        
    return answer

def convert(num, base):
    tmp = string.digits+string.ascii_lowercase
    q, r = divmod(num, base)
    if q == 0 :
        return tmp[r] 
    else :
        return convert(q, base) + tmp[r]


#https://school.programmers.co.kr/learn/courses/30/lessons/17687?language=python3