/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let mp = new Map()
    let dp = function(n){
        if (mp.has(n)) return mp.get(n)

        let rt = 0

        if (n == 0) rt = 1
        else if (n == 1) rt = 1
        else rt = dp(n-1) + dp(n-2)

        mp.set(n, rt)
        return rt
    }

    for (let i = 0; i <= n; i++) dp(i)

    return mp.get(n)
};
