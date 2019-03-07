class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        
        if len(s) == 0:
            return t
        
        ms = {}
        
        for i in s:
            if i in ms:
                ms[i] += 1
            else:
                ms[i] = 1
        
        for j in t:
            if j in ms:
                if ms[j] == 0:
                    return j
                else:
                    ms[j] -= 1
            else:
                return j
                
        return ""
