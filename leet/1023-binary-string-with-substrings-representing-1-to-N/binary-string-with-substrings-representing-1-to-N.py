class Solution:
    def queryString(self, S: str, N: int) -> bool:
        
        for i in range(1, N +1):
            s = bin(i).replace('0b', "")
            if S.find(s) == -1:
                return False
            
        return True
