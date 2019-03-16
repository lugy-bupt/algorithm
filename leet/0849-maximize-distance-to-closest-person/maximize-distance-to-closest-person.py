class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        pos = []
        for i in range(len(seats)):
            if seats[i] == 1: pos.append(i)
                
        pFirst = pos[0] - 0
        pLast = len(seats) - 1 - pos[-1]
        rs = 0
        for i in range(len(pos) - 1):
            rs = max(rs, pos[i + 1] - pos[i])
            
        return max(rs//2, max(pFirst, pLast))
