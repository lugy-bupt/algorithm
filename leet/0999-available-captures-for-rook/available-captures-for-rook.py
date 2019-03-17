class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        
        i = 0
        j = 0
        
        for m in range(8):
            for n in range(8):
                if board[m][n] == 'R':
                    i = m
                    j = n
        
        rs = 0
        
        x = i - 1
        while x >= 0:
            if board[x][j] != '.':
                if board[x][j] == 'p': rs += 1
                break
            x -= 1
        
        x = i + 1
        while x < 8:
            if board[x][j] != '.':
                if board[x][j] == 'p': rs += 1
                break
            x += 1
                
        y = j - 1
        while y >= 0:
            if board[i][y] != '.':
                if board[i][y] == 'p': rs += 1
                break
            y -= 1
                
        y = j + 1
        while y < 8:
            if board[i][y] != '.':
                if board[i][y] == 'p': rs += 1
                break
            y += 1
            
        return rs
