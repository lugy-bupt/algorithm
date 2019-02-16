func maxAreaOfIsland(grid [][]int) int {
    m := len(grid)
    if(m == 0) {return 0}
    n := len(grid[0])
    if(n == 0) {return 0}
    
    rs := 0
    walked := make(map[string]int)
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if(grid[i][j] == 1){
                key := strconv.Itoa(i) + "-" + strconv.Itoa(j)
                if _, ok := walked[key]; !ok {
                    // dst 
                    walker := make(map[string]int)
                    dst(grid, walker, i, j, m, n)
                    temp := 0
                    for _, v := range walker {
                        temp += v;
                    }
                    if(rs < temp) {rs = temp}
                }
            }
        }
    }
    return rs
}

func dst(grid [][]int, walker map[string]int, i,j,m,n int) {
    key := strconv.Itoa(i) + "-" + strconv.Itoa(j)
    if _, ok := walker[key]; ok { return }
    walker[key] = 1
    
    if(j != 0 && grid[i][j - 1] == 1){
        dst(grid, walker, i, j - 1, m, n)
    }
    if(j != n - 1 && grid[i][j + 1] == 1){
        dst(grid, walker, i, j + 1, m, n)
    }
    if(i != 0 && grid[i - 1][j] == 1){
        dst(grid, walker, i - 1, j, m, n)
    }
    if(i != m - 1 && grid[i + 1][j] == 1){
        dst(grid, walker, i + 1, j, m, n)
    }
}
