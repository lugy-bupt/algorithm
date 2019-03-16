class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        elif len(nums) == 1:
            return nums[0]
        
        return max(self.dfs(0, nums[0: len(nums) - 1], {}), self.dfs(0, nums[1:], {}))
    
    def dfs(self, start: int, nums: List[int], records: {}) -> int:
        if start in records:
            return records[start]
            
        rs = 0
        if start == len(nums) - 1:
            rs = nums[start]
        elif start < len(nums) - 1:
            rs = max(nums[start] + self.dfs(start + 2, nums, records), self.dfs(start + 1, nums, records))
                
        if start not in records:
            records[start] = rs
            
        return rs
