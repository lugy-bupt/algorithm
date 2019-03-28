class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        if len(num) < 3:
            return False
        
        stack = []
        
        def dfs(num: str, idx: int) -> bool:
            if idx == len(num) and len(stack) > 2: return True
            
            for i in range(idx + 1, len(num) + 1):
                if num[idx] == "0" and i > idx + 1:
                    break
                
                theNumber = int(num[idx: i])
                
                if len(stack) >= 2 and stack[-1] + stack[-2] != theNumber:
                    continue
                else:
                    stack.append(theNumber)
                    if dfs(num, i) : return True
                    stack.pop()
                    
            return False
        
        return dfs(num, 0)
