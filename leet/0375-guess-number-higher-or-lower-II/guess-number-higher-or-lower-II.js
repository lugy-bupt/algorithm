/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    if (n == 1) return 0

    let mp = new Array(n + 1)
    for (let i = 0; i < n + 1; i++) mp[i] = new Array(n + 1).fill(9999)

    let dp = function(l, r) {
        if (l >= r) return 0
        if (mp[l][r] != 9999) return mp[l][r]

        for (let i = l; i <=r; i++)
            mp[l][r] = Math.min(mp[l][r], Math.max(dp(l,i-1), dp(i+1, r)) + i)

        return mp[l][r]
    }

    return dp(1, n)
};
