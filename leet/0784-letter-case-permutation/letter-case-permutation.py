class Solution:
    def letterCasePermutation(self, S: str) -> List[str]:
        S = list(S.lower())
        
        stack = []
        ret = []
        
        def dfs(i: int):
            if i == len(S):
                ret.append("".join(S))
                return
            
            stack.append(S[i])
            dfs(i + 1)
            stack.pop()
            
            if S[i].isalpha():
                S[i] = S[i].upper()
                stack.append(S[i])
                dfs(i + 1)
                stack.pop()
                S[i] = S[i].lower()
                    
        dfs(0)
        return ret
