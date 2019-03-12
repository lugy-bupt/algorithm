class Solution:
    def isValid(self, S: str) -> bool:
        p = ""
        while p != S:
            p = S
            S = S.replace("abc", "")
            
        return p == ""
