class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        length = len(rooms)
        visited = [0] * length
        
        def dfs(i: int, keys: List[int]):
            visited[i] = 1
            for key in keys:
                if visited[key] == 0:
                    dfs(key, rooms[key])
        
        dfs(0, rooms[0])
        
        for i in visited:
            if i == 0: return False
            
        return True
