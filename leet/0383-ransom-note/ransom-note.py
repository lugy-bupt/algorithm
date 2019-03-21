class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if ransomNote == "" : return True
        if magazine == "" : return False
        
        dicts = {}
        for i in magazine:
            if i not in dicts:
                dicts[i] = 0
            dicts[i] += 1
            
        for j in ransomNote:
            if j not in dicts:
                return False
            dicts[j] -= 1
            if dicts[j] == 0:
                dicts.pop(j)
                
        return True
