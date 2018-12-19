func uniquePaths(m int, n int) int {
    cache := make([][]int, m)
    for i := 0; i < m; i++ {
        cache[i] = make([]int, n)
    }
    
    for i := 0; i < m; i++{
        for j:= 0; j < n; j++{
            if i == 0 || j == 0 {
                cache[i][j] = 1
            } else {
                cache[i][j] = cache[i - 1][j] + cache[i][j - 1]
            }
        }
    }
    
    return cache[m -1][n - 1]
}
