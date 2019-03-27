class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:
        def check (S: str, word: str) -> bool:
            if S == "" and word == "": return True
            elif S == "" or word == "": return False

            i, j = 0, 0
            
            while i < len(S) and j < len(word):
                if S[i] != word[j]:
                    return False
                else:
                    cs, ws = 0, 0
                    while i+ 1 < len(S) and S[i] == S[i + 1]:
                        i += 1; cs += 1
                    while j + 1 < len(word) and word[j] == word[j + 1]:
                        j += 1; ws += 1
                        
                    if cs < ws : return False
                    elif cs != ws and cs < 2: return False
                    i += 1; j += 1
                    
            return j == len(word) and i == len(S)
        
        ret = 0
        
        for word in words:
            if check(S, word): ret += 1
                
        return ret
