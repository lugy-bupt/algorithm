class Solution:
    def rob(self, nums: List[int]) -> int:
        records = {}
        def dfs(start: int) -> int:
            if start in records:
                return records[start]
            
            rs = 0
            if len(nums) == start + 1:
                rs = nums[start]
            elif len(nums) > start + 1:
                rs = max(nums[start] + dfs(start +2), dfs(start +1))
                
            records[start] = rs
            return rs
        
        return dfs(0)
