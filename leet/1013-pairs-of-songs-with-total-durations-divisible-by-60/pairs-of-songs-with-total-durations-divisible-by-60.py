class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        dicts = {}
        
        for i in range(len(time)):
            x = time[i] % 60
            dicts[x] = dicts.get(x, []) + [i]
        
        ret = 0
        visited = set()
        
        for i in dicts.keys():
            if i in visited:
                continue
                
            if i == 30 or i == 0:
                ret += len(dicts[i]) * (len(dicts[i]) - 1) // 2    
            elif 60 - i in dicts:
                ret += len(dicts[i]) * len(dicts[60 - i])
                visited.add(60 - i)
            visited.add(60 - i)
            
        return ret 
