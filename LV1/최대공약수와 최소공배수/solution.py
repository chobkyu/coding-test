import math

def solution(n, m):
    max = math.gcd(n,m)
    min = n * m / max
    answer = [max,min]
    return answer

# https://school.programmers.co.kr/learn/courses/30/lessons/12940