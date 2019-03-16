class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        if A is None or len(A) == 0:
            return []
        
        if len(A) == 1:
            return A.split("")
        
        # create a dict with A0
        m = {}
        for i in A[0]:
            m[i] = 1 if i not in m else m[i] + 1
        
        # compare A0 and A1
        for i in range(1, len(A)):
            newM = {}
            
            for j in A[i]:
                if j in m:
                    newM[j] = 1 if j not in newM else newM[j] + 1
                    m[j] -= 1
                    if m[j] == 0:
                        m.pop(j)
                        
            m = newM
            
        # calculate m as a list
        rs = []
        
        for k, v in m.items():
            rs += [k] * v
        
        return rs
