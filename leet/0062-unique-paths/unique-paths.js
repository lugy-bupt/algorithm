/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let mp = new Map();

    let dfs = function(i,j){
        if (i == 1 || j == 1) return 1

        let key = i + "-" + j
        if (mp.has(key)) return mp.get(key)

        let ret = dfs(i - 1, j) + dfs(i, j -1)
        mp.set(key, ret)
        return ret
    }

    return dfs(m,n)
};
