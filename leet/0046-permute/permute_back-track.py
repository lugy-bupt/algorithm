class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0: return []
        
        stack = []
        ret = []
        
        def dfs(s: int) :
            if s == len(nums): 
                ret.append([] + stack)
                return 
            
            for i in nums:
                if i not in stack:
                    stack.append(i)
                    dfs(s + 1)
                    stack.pop()
                    
        dfs(0)
        return ret
