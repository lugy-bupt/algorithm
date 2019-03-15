class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        visited = [-1] * (N + 1)
        
        # create graph
        graph = {}
        for time in times:
            if time[0] not in graph:
                graph[time[0]] = []
            graph[time[0]].append(time)
            
        def dfs(start: int, time: int): 
            visited[start] = time
            
            if start in graph:
                for node in graph[start]:
                    if visited[node[1]] == -1 or visited[node[1]] > (time + node[2]):
                        dfs(node[1], time + node[2])
        
        
        # start is K
        dfs(K, 0)
        rs = 0
        for i in range(1, N + 1):
            if visited[i] == -1:
                return -1
            rs = max(rs, visited[i])
            
        return rs
        
