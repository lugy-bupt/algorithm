/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 != 0
};
    
    // below is the algorithm of DP, but there is an OOM when input 1348820612

    // let dp = new Array(n + 1)
    // dp[1] = true
    // dp[2] = true
    // dp[3] = true

    // for (let i = 4; i <= n; i++){
    //     dp[i] = !(dp[i - 1] && dp[i - 2] && dp[i - 3])
    // }

    // return dp[n]
