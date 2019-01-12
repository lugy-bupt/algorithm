func minPathSum(grid [][]int) int {
    m := len(grid)
    n := len(grid[0])
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if(i == 0 && j == 0) {
                continue
            }else if(i > 0 && j > 0){
                grid[i][j] = grid[i][j] + min(grid[i-1][j], grid[i][j-1])
            }else if(i > 0){
                grid[i][j] = grid[i][j] + grid[i-1][j]
            }else {
                grid[i][j] = grid[i][j] + grid[i][j-1]
            }
        }
    }
    
    return grid[m - 1][n - 1]
}

func min(i,j int)int{
    if(i > j) {return j}
    return i
}
