/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    let mp = new Map();

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            let key = i + "-" + j
            let ret = 0
            if (obstacleGrid[i][j] == 1) ret = 0
            else{
                if (i == 0 && j == 0) ret = 1
                else{
                    ret = (mp.get((i - 1) + "-" + j) || 0) + (mp.get(i + "-" + (j - 1)) || 0)
                }
            }
            mp.set(key, ret)
        }
    }

    return mp.get((m - 1) + "-" + (n - 1))
};
