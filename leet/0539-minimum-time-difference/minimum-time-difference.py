class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        if len(timePoints) == 0: return 0
        
        def getPs(x:str) -> int:
            xs = x.split(":")
            return int(xs[0]) * 60 + int(xs[1])
        
        ps = sorted(list(map(lambda x: getPs(x), timePoints)))
        
        rs = 24 * 60
        
        for i in range(len(ps)):
            if i == len(ps) - 1:
                rs = min(rs, min(ps[-1] - ps[0], 24 * 60 - ps[-1] + ps[0]))
            else:
                rs = min(rs, ps[i + 1] - ps[i])
                
        return rs
                         
