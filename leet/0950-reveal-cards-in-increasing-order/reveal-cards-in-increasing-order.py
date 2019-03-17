class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        length = len(deck)
        if length < 2: return deck
        
        deck.sort(reverse=True)
        rs = []
        
        for i in deck:
            if len(rs) > 0:
                x = rs.pop()
                rs.insert(0, x)
            rs.insert(0, i)
            
        return rs
