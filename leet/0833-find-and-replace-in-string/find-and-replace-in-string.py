class Solution:
    def findReplaceString(self, S: str, indexes: List[int], sources: List[str], targets: List[str]) -> str:
        if len(indexes) == 0 or S == "" : return S
        
        def replace(S, start, source, target) -> str:            
            if S[start: start + len(source)] == source:
                return S[0:start] + target + S[start + len(source):]
            return S
        
        dicts = {}
        for i in range(len(indexes)) : dicts[indexes[i]] = i
        
        keys = sorted(dicts.keys())
        
        for i in range(len(keys) - 1, -1, -1):
            S = replace(S, keys[i], sources[dicts[keys[i]]], targets[dicts[keys[i]]])
            
        return S
