class Solution:
    def reverseWords(self, s: str) -> str:
        if len(s) < 2 : return s

        def rever(s: str) -> str:
            if len(s) < 2: return s
            
            l = list(s)
            start = 0
            end = len(s) - 1
            
            while start < end:
                l[start], l[end] = l[end], l[start]
                start += 1
                end -= 1
            
            return "".join(l)
            
        arr = s.split(" ")
        rs = []
        for i in arr:
            rs.append(rever(i))
        return " ".join(rs)
