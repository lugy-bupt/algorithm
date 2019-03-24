class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        ms = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        
        ret = set()
        
        for w in words:
            msWord = ""
            for c in w:
                msWord += ms[ord(c) - 97]
            
            ret.add(msWord)
            
        return len(ret)
