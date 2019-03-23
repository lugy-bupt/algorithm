class Solution:
    def repeatedStringMatch(self, A: str, B: str) -> int:
        a = A
        while len(a) <= len(A) * 2 + len(B):
            if a.find(B) == -1:
                a += A 
            else:
                return len(a) // len(A)
        
        return -1
