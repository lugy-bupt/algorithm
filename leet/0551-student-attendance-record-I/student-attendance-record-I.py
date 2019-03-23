class Solution:
    def checkRecord(self, s: str) -> bool:
        A = -1
        L = []
        
        for i in range(len(s)):
            if s[i] == 'A':
                if A == -1 : A = i
                else: return False
            elif s[i] == 'L':
                # print(i)
                if len(L) > 0:
                    if L[-1] == i - 1:
                        L.append(i)
                        if len(L) > 2:
                            return False
                        continue
                L = [i]
                
                
        return True
