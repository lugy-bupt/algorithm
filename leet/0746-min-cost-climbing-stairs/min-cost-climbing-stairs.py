class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        length = len(cost)
        
        records = {}
        
        def dfs(start: int):
            if start in records:
                return records[start]
            
            rs = 0
            if length - start < 2:
                rs = 0
            elif length - start == 2:
                rs = min(cost[start], cost[start + 1])
            else:
                rs = min(cost[start] + dfs(start + 1), cost[start + 1] + dfs(start + 2))
            records[start] = rs
            return rs
            
        dfs(0)
        return records[0]
