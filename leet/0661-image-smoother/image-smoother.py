class Solution:
    def imageSmoother(self, M: List[List[int]]) -> List[List[int]]:
        m = len(M)
        n = len(M[0])
        
        if m == 1 and n == 1 : return M
        
        rs = [[0] * n for i in range(m)]
        
        for i in range(m):
            for j in range(n):
                number = 1
                rs[i][j] = M[i][j]
                
                if i > 0 :
                    number += 1
                    rs[i][j] += M[i - 1][j]
                    
                    if j > 0:
                        number += 1
                        rs[i][j] += M[i - 1][j - 1] 
                    if j < n - 1:
                        number += 1
                        rs[i][j] += M[i - 1][j + 1] 
                        
                if i < m - 1:
                    number += 1
                    rs[i][j] += M[i + 1][j]
                    
                    if j > 0:
                        number += 1
                        rs[i][j] += M[i + 1][j - 1] 
                    if j < n - 1:
                        number += 1
                        rs[i][j] += M[i + 1][j + 1]    
                        
                if j > 0:
                    number += 1
                    rs[i][j] += M[i][j - 1]
                    
                if j < n - 1:
                    number += 1
                    rs[i][j] += M[i][j + 1]
                    
                rs[i][j] = rs[i][j] // number
                
        return rs
