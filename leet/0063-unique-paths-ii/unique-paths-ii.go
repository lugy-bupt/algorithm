func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    m := len(obstacleGrid)
    n := len(obstacleGrid[0])
    
    cache := make([][]int, m)
    for i := 0; i < m; i++ { cache[i] = make([]int, n) }
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if ( i == 0 || j == 0 ) {
                if (obstacleGrid[i][j] == 1) {
                    cache[i][j] = 0
                } else{
                    if (i == 0 && j > 0 && cache[i][j - 1] == 0) || (j == 0 && i > 0 && cache[i-1][j] == 0) {
                        cache[i][j] = 0
                    } else {
                        cache[i][j] = 1
                    }
                }
            } else {
                if (obstacleGrid[i][j] == 1) {
                    cache[i][j] = 0
                } else{
                    cache[i][j] = cache[i - 1][j] + cache[i][j - 1]
                }
            }
        }
    }
    
    return cache[m - 1][n - 1]
}
