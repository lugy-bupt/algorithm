/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length
    if (m == 0) return 0
    let n = grid[0].length
    if (n == 0) return 0
    
    let ret = 0
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] == 1){
                ret += 4
                if(i > 0 && grid[i - 1][j] == 1) ret--
                if(i < m - 1 && grid[i + 1][j] == 1) ret--
                if(j > 0 && grid[i][j - 1] == 1) ret--
                if(j < n - 1 && grid[i][j + 1] == 1) ret--
            }
        }
    }
    
    return ret
};
