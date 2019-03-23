class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
        A0 = []
        A1 = []
        V = [0] * len(A)
        
        def splitA(s : str):
            dict0 = {}
            dict1 = {}
            
            for i in range(len(s)):
                if i % 2 == 0:
                    dict0[s[i]] = dict0.get(s[i], 0) + 1
                else:
                    dict1[s[i]] = dict1.get(s[i], 0) + 1
                    
            A0.append(dict0)
            A1.append(dict1)
            
        def isSame(dict0, dict1):
            if len(dict0) == len(dict1):
                for key, value in dict0.items():
                    if key not in dict1 or dict1[key] != value:
                        return False
                
                return True
                
            return False
        
        ret = 0
                
        for i in A: splitA(i)
        
        for i in range(len(A)):
            if V[i] == 1:
                continue
            else:
                ret += 1
                
                for j in range(i, len(A)):
                    if isSame(A0[i], A0[j]) and isSame(A1[i], A1[j]):
                        V[j] = 1
        
        return ret
        
        
            
