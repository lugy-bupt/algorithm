class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        
        def getR (a: int, b: int) -> int:
            if b == 0 : return a
            return getR(b, a % b)
        
        dicts = {}
        
        for i in deck:
            dicts[i] = dicts.get(i, 0) + 1
        
        vs = sorted(dicts.values())
        
        print(vs)
        
        if vs[0] == 1: return False                
        
        for i in range(1, len(vs)):
            if getR(vs[i], vs[0]) == 1 : return False
            
        return True
