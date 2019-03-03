class Solution:
    def countSubstrings(self, s: str) -> int:
        if s is None or len(s) == 0:
            return 0
        
        length = len(s)
        rs = 0
        
        for mid in range(length):
            # calcul mid
            i = mid
            j = mid
            while i >= 0 and j < length:
                if(s[i] == s[j]) :
                    rs = rs + 1
                    i = i - 1
                    j = j + 1
                else :
                    break
            # calcul mid and mid + 1
            i = mid
            j = mid + 1
            while i >= 0 and j < length:
                if(s[i] == s[j]) :
                    rs = rs + 1
                    i = i - 1
                    j = j + 1
                else:
                    break
        
        return rs
        
