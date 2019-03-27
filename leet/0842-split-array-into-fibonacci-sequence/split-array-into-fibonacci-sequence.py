class Solution:
    def splitIntoFibonacci(self, S: str) -> List[int]:
        if S == "":
            return []
        res = []
        n = len(S)
        
        def helper(res, idx):            
            if idx == n and len(res) >= 3:
                return True
            
            for i in range(idx, n):
                if S[idx] == "0" and i > idx:
                    break
                    
                num = int(S[idx:i + 1])
                tmp_n = len(res)
                
                if num > 2147483647:
                    break
                if tmp_n >= 2 and num > res[-1] + res[-2]:
                    break
                if tmp_n <= 1 or num == res[-1] + res[-2]:
                    res.append(num)
                    
                    if helper(res, i + 1):
                        return True
                    
                    res.pop()
                    
            return False
        
        helper(res, 0)
        return res
