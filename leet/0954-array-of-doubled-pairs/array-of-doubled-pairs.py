class Solution:
    def canReorderDoubled(self, A: List[int]) -> bool:
        if len(A) == 0 : return True
        
        dicts = {}
        
        for i in A:
            if i not in dicts:
                dicts[i] = 0
            dicts[i] += 1
            
        if 0 in dicts:
            if dicts[0] % 2 == 1:
                return False
            dicts.pop(0)
                
        keys = sorted(dicts.keys())
        
        for key in keys:
            if key not in dicts:
                continue
            
            if key < 0:
                if key % 2 != 0:
                    return False
                
                nkey = key // 2
                if nkey in dicts:
                    dicts[nkey] -= dicts.pop(key)
                    if dicts[nkey] == 0 : dicts.pop(nkey)
                else:
                    return False
            else:
                nkey = key * 2
                if nkey in dicts:
                    dicts[nkey] -= dicts.pop(key)
                    if dicts[nkey] == 0 : dicts.pop(nkey)
                else:
                    return False
                
        return len(dicts) == 0
            
