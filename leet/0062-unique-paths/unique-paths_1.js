/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m == 0 && n == 0) return 0
    if (m == 1 && n == 1) return 1

    let mp = new Array(m)
    for (let i = 0; i < m; i++) mp[i] = new Array(n).fill(0)

    for (let i = 1; i < m; i++) mp[i][0] = 1
    for (let i = 1; i < n; i++) mp[0][i] = 1

    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++) {
            mp[i][j] = mp[i - 1][j] + mp[i][j - 1]
        }
    }
    
    return mp[m - 1][n - 1]
};
