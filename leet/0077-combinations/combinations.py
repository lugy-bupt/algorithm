class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        if n == 0 or k == 0 : return []
        
        ret = []
        stack = []
        
        def dfs(nn: int, kk: int):
            if kk == 0 : 
                ret.append([] + stack)
                return
        
        
            for i in range(nn, 0, -1):
                stack.append(i)
                dfs(i-1, kk-1)
                stack.pop()
                
        dfs(n, k)
        return ret        
