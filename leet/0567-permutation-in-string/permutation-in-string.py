class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1) : return False
            
        def same(d1, d2) -> bool:
            if len(d1) != len(d2): return False
            
            for k, v in d1.items():
                if k not in d2 or d2[k] != v: return False
            
            return True
        
        d1 = {}
        for i in s1: d1[i] = d1.get(i, 0) + 1
        d2 = {}
        for i in range(len(s1)): d2[s2[i]] = d2.get(s2[i], 0) + 1
        
        for i in range(0, len(s2) - len(s1) + 1):
            if same(d1, d2) : return True
            if i + len(s1) == len(s2):
                break
            d2[s2[i]] -= 1
            if d2[s2[i]] == 0 : d2.pop(s2[i])
            d2[s2[i + len(s1)]] = d2.get(s2[i + len(s1)], 0) + 1
                         
        return False
                
