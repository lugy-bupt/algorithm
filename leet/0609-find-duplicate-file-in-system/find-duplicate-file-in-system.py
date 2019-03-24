class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        
        def parse(path: str):
            dicts = {}
            
            arr = path.split(" ")
            
            for i in range(1, len(arr)):
                file = arr[i]
                index = file.find("(")
                name = file[0: index]
                content = file[index + 1: len(file) - 1]
                dicts[content] = dicts.get(content, []) + [arr[0] + "/" + name]
            
            return dicts
                
        def merge(d1, d2):
            for k, v in d2.items():
                d1[k] = d1.get(k, []) + v
                
        d0 = {}
        for path in paths: merge(d0, parse(path))
            
        ret = []    
        for v in d0.values() : 
            if len(v) > 1:
                ret.append(v)
            
        return ret
