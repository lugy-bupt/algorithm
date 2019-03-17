class Solution:
    def largeGroupPositions(self, S: str) -> List[List[int]]:
        rs = []
        length = len(S)
        
        if length < 3: return rs
        
        c = S[0]
        start = 0
        
        for i in range(length):
            if c != S[i]:
                if i - start >= 3:
                    rs.append([start, i - 1])
                start = i
                c = S[i]
                
        if length - start >= 3:
            rs.append([start, length - 1])
            
        return rs
        
