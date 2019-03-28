class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        if len(candidates) == 0 : return []
        
        stack = []
        ret = []
        
        def dfs(cs: List[int], t: int):
            if t == 0:
                ret.append([] + stack)
                return
            elif t < 0:
                return
            
            for i in range(len(cs)):
                stack.append(cs[i])
                dfs(cs[i:], t - cs[i])
                stack.pop()
                
        dfs(candidates, target)
        
        return ret
