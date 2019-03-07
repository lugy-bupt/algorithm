class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        rs = ""
        index = -1
        cm = {}
        for c in licensePlate:
            if ord(c) < 123 and ord(c) > 64:
                cx = c.lower()
                if cx in cm:
                    cm[cx] += 1
                else:
                    cm[cx] = 1
        
        for i in range(len(words)):
            word = words[i]
            isMatch = True
            wordx = word.lower()
            for k, v in cm.items():
                if wordx.count(k) < v:
                    isMatch = False
                    break
            
            if isMatch and (rs == "" or len(rs) > len(word) or (len(rs) == len(word) and index > i)):
                rs = word
                index = i
        
        return rs
                
                
            
