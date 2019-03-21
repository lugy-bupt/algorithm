class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        if len(s) < 2 or k < 2: return s
        
        def rever(s: List[str], start: int, end: int) -> bool:
            shouldContinue = True
            if start < 0 or end >= len(s) -1:
                start = max(start, 0)
                end = min(end, len(s) - 1)
                shouldContinue = False
            
            while start < end:
                s[start], s[end] = s[end], s[start]
                start += 1
                end -= 1
            return shouldContinue
        
        i = 0
        strs = list(s)
        while rever(strs, i * k, (i + 1) * k - 1) :
            i += 2
            
        return "".join(strs)
            
