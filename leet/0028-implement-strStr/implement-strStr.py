class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "" : return 0
        
        for i in range(len(haystack)):            
            if haystack[i] == needle[0] and len(haystack) - i >= len(needle):
                hs, hn = i, 0
                
                while hn < len(needle) and haystack[hs] == needle[hn]:
                    hs += 1; hn += 1
                    
                if hn == len(needle):
                    return i
                
        return -1
