class Solution:
    def minIncrementForUnique(self, A: List[int]) -> int:
        length = len(A)
        
        if length < 2: return 0
        
        A.sort()
        
        start = 0
        rs = 0
        for i in range(length):
            should = A[start] + i - start
            
            if A[i] > should:
                start = i
            else:
                rs += should - A[i]
                
        return rs
            
