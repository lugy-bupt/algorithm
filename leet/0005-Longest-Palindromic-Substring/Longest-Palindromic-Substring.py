class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s is None or len(s) < 1 :
            return s
        
        rs = ""
        length = len(s)
        
        for mid in range(length):
            s1 = self.getPalindrome(mid, mid, s)
            s2 = self.getPalindrome(mid, mid+1, s)
            if(len(s1) > len(rs)):
                rs = s1
            if(len(s2) > len(rs)):
                rs = s2
        return rs
    
    def getPalindrome(self, start: int, end: int, s: str) -> str:
        while start >= 0 and end < len(s):
            if s[start] == s[end] :
                start = start - 1
                end = end + 1
            else:
                break
        return s[start + 1: end]
