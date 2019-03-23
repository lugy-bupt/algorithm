class Solution:
    def shiftingLetters(self, S: str, shifts: List[int]) -> str:
        cache = [0] * len(shifts)
        
        last = 0
        for i in range(len(shifts) - 1, -1, -1):
            cache[i] = ( last + shifts[i] ) % 26
            last = cache[i]
            
        ret = ""
        
        for i in range(len(S)):
            s = ord(S[i]) + cache[i]
            ret += chr(s if s < 123 else s - 26)
            
        return ret
