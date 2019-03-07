class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        sDict = {}
        
        for i in range(len(secret)):
            if secret[i] in sDict:
                sDict[secret[i]].add(i)
            else:
                sDict[secret[i]]={i}
        
        A = 0
        B = 0

        result = {}
    
        for i in range(len(guess)):
            if guess[i] in sDict:
                if not guess[i] in result:
                    result[guess[i]] = [0,0, len(sDict[guess[i]])]
                tempRs = result[guess[i]]
                
                if i in sDict[guess[i]]:
                    tempRs[0] += 1
                    sDict[guess[i]].remove(i)
                else:
                    tempRs[1] += 1
                    
        for key, rs in result.items():
            A += rs[0]
            B += min(rs[1], rs[2] - rs[0])
                    
        return str(A) + "A" + str(B) + "B"
