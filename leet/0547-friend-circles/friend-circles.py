class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        length = len(M)
        color = [0] * length
        
        def dfs(i: int, c: int):
            color[i] = c

            for y in range(length):
                if M[i][y] == 1 and color[y] == 0:
                    dfs(y, c)
                    
        defaultColor = 2
        for i in range(length):
            if color[i] == 0:
                dfs(i, defaultColor)
                defaultColor += 1
                
        return len(set(color))
        
