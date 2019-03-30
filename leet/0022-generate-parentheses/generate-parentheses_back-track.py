class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        if n == 0: return []
        
        stack = []
        ret = []
        
        def dfs(t:int):
            if t == 0:
                ret.append("".join(stack))
                return
            
            for i in ['(', ')']:
                if stack.count('(') == stack.count(")") and i == ')' :
                    continue
                    
                if stack.count('(') == n and i == '(':
                    continue
                    
                stack.append(i)
                dfs(t - 1)
                stack.pop()
                
        dfs(2 * n)
        return ret
