class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
        if S is None or len(S) < 2:
            return S
        
        i = 0
        j = len(S) - 1
        
        rs = list(S)
        
        while i < j:
            # if possible, switch.
            while i < j and not rs[i].isalpha():
                i += 1
            while i < j and not rs[j].isalpha():
                j -= 1
                
            if i < j:  
                # switch
                rs[i], rs[j] = rs[j], S[i]
                i += 1
                j -= 1
            else:
                break
                
        return "".join(rs)
    
    def isNotAlphabet(self, s: str) -> bool: 
        return not ((s >= "A" and s <= "Z") or (s >= "a" and s <= "z"))
