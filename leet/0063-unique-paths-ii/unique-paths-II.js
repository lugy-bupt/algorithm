/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    let mp = new Map();

    let dfs = function(i,j){
        if (i < 0 || j < 0) return 0

        if (obstacleGrid[i][j] == 1) return 0 
        if (i == 0 && j == 0) return 1

        let key = i + "-" + j
        if (mp.has(key)) return mp.get(key)

        let ret = dfs(i - 1, j) + dfs(i, j -1)
        mp.set(key, ret)
        return ret
    }
    
    return dfs(m - 1, n - 1)
};
