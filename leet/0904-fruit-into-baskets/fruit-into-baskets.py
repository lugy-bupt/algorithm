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
        
        for i in range(len(tree)):
            if len(tree) - i <= ret:
                break
                
            ret = max(ret, getFruit(i))
            
        return ret
            
        
