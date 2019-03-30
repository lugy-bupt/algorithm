class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        if len(candidates) == 0 : return []
        
        stack = []
        ret = []
        candidates.sort()
        
        def dfs(s: int, t: int):
            
            if t == 0:
                ret.append([] + stack)
                return
            elif t < 0:
                return
            
            i = s
            while i < len(candidates) and t >= candidates[i]:
                stack.append(candidates[i])
                dfs(i + 1,  t - candidates[i])
                stack.pop()

                while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                    i += 1
                i += 1
                
        dfs(0, target)
        return ret
            
            
        
