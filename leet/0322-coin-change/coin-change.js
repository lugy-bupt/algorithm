/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length
    if (amount == 0) return 0
    if (n == 0) return -1

    coins.sort((a, b) => a- b)

    const MAX = 2 ** 31 - 1
    const dp = new Array(amount + 1)
    for (let i = 0; i < dp.length; i++){
        dp[i] = new Array(n).fill(MAX)
    }
    
    for (let i = 1; i <= amount; i++){
        for (let j = 0; j < n; j++){
            let diff = i - coins[j]
            if (diff == 0) dp[i][j] = 1
            else if (diff > 0){
                let min = Math.min.apply(null, dp[diff]) 
                dp[i][j] = (min == MAX ? MAX : min + 1)
            }
        }
    }

    let min = Math.min.apply(null, dp[amount]) 
    return min == MAX ? -1 : min
};
