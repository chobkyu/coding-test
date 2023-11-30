def solution(skill, skill_trees):
    answer = 0
    
    for skill_tree in skill_trees :
        skillTemp = skill
        flag = True
        tempArr = list(skill_tree)
        for temp in tempArr:
            idx = skillTemp.find(temp)
            if idx != -1 :
                if idx == 0:
                    skillTemp = skillTemp.replace(temp,'')
                else :
                    flag = False
                    break
        if flag :
            answer+=1
    return answer

#https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=python3