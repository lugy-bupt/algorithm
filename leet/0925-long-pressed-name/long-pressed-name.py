class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        if len(name) == 0 and len(typed) == 0:
            return True
        elif len(name) == 0 or len(typed) == 0:
            return False
        
        c = name[0]
        t = typed[0]
        
        if c == t:
            # check next
            if len(name) > 1 and name[1] == c:
                return self.isLongPressedName(name[1:], typed[1:])
            else:
                i = 1
                while i < len(typed) and typed[i] == c:
                    i += 1
                return self.isLongPressedName(name[1:], typed[i:])           
        else:
            return False
