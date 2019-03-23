class Solution:
    def totalFruit(self, tree: List[int]) -> int:
        
        def getFruit(start: int) -> int:
            ret = 0
            dicts = {}
            
            for i in range(start, len(tree)):
                if tree[i] not in dicts and len(dicts) == 2:
                    break
                    
                dicts[tree[i]] = dicts.get(tree[i], 0) + 1
                
            for i in dicts.values():
                ret += i
            
            return ret
        
        ret = 0
        i = 0
        while i < len(tree):
            if len(tree) - i <= ret:
                break    
            ret = max(ret, getFruit(i))
            
            while i + 1 < len(tree) and tree[i] == tree[i + 1]:
                i += 1
            i += 1
            
        return ret
            
        
