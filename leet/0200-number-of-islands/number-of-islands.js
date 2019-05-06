/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length
    if (m == 0) return 0
    let n = grid[0].length
    if (n == 0) return 0

    let ret = 0
    let mp = new Array(m)
    for (let i = 0; i < m; i++) mp[i] = new Array(n).fill(0)

    let dfs = function(i, j){
        if (i < 0 || j < 0 || i == m || j == n || grid[i][j] == '0' || mp[i][j] == 1) 
            return 
        mp[i][j] = 1
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }

    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if (grid[i][j] == '1' && mp[i][j] == 0){
                // start calculate
                dfs(i, j)
                ret += 1
            }
        }
    }
    
    return ret
};
