class Solution:
    def judgeCircle(self, moves: str) -> bool:
        step = {"R": (1,0), "L":(-1, 0), "U": (0,1), "D":(0, -1)}
        
        start = (0,0)
        
        for i in moves:
            start = (start[0] + step[i][0], start[1] + step[i][1])
            
        return start == (0,0)
