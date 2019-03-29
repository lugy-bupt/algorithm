class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0: return []
        
        ret = []
        stack = []
        
        def dfs(s: int):  
            ret.append([] + stack)
                
            if s == len(nums):
                return
            
            for i in range(s, len(nums)):
                stack.append(nums[i])
                dfs(i + 1)
                stack.pop()
                
        dfs(0)
        return ret
