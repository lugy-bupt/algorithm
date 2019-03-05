class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        change = []
        m = len(board)
        n = len(board[0])
        for i in range(m):
            for j in range(n):
                if self.needChange(i, j, m, n, board):
                    change.append([i,j])
        
        for x in change:
            if board[x[0]][x[1]] == 0 :
                board[x[0]][x[1]] = 1
            else:
                board[x[0]][x[1]] = 0
    
    def needChange(self, x: int, y: int, m: int, n: int, board: List[List[int]]) -> bool:
        sum = 0
        for i in range(-1, 2):
            for j in range(-1, 2):
                xx = x + i
                yy = y + j
                if xx >= 0 and xx < m and yy >= 0 and yy < n:
                    sum += board[xx][yy]
                    
        if board[x][y] == 1:
            if sum < 3 or sum > 4:
                return True
        else:
            if sum == 3:
                return True
            
        return False
