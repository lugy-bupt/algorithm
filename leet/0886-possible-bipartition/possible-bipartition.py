class Solution:
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        if N <= 2:
            return True
            
        i = 1
        while i <= N:
            # dfs
            rs = self.dfs(i, dislikes, set(), set())
            
            if not rs:
                return rs
            
            i += 1
        return True
        
    def dfs(self, i: int, dislikes: List[List[int]], g0, g1) -> bool:

        iDislikes = filter(lambda x : x[0] == i or x[1] == i, dislikes)
        
        for iDislike in iDislikes:
            if iDislike[0] == iDislike[1]:
                return False
            # try split
            dislikes.remove(iDislike)
            n = iDislike[0] if iDislike[1] == i else iDislike[1]
            
            if (i in g0 and n in g0) or (i in g1 and n in g1):
                return False
            elif i in g0:
                g1.add(n)
            elif i in g1:
                g0.add(n)
            else:
                g0.add(i)
                g1.add(n)
            
            rs = self.dfs(n, dislikes, g0, g1)
            if not rs:
                return rs
                
        return True
        
