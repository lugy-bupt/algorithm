class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        length = len(graph)
        if length < 2:
            return True
        
        colors = [0] * length
        
        def dfs(i: int, c: int) -> bool:
            colors[i] = c
            
            for n in graph[i]:
                if colors[n] == c:
                    return False
                elif colors[n] == 0 and not dfs(n, -c):
                    return False
            
            return True
        
        for i in range(length):
            if colors[i] == 0 and not dfs(i, 1):
                return False
            
        return True
