class Solution:
    def transpose(self, A: List[List[int]]) -> List[List[int]]:
        m = len(A)
        if m == 0:
            return A
        n = len(A[0])
        if n == 0:
            return A
        
        rs = []
        for i in range(n):
            rsx = []
            for j in range(m):
                rsx.append(0)
            rs.append(rsx)
            
        for i in range(m):
            for j in range(n):
                rs[j][i] = A[i][j]
                
        return rs
