/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const m = prices.length
    if (m == 0) return 0
    
    const mp = new Array(m)
    mp[0] = 0

    for (let i = 1; i < m; i++){
        mp[i] = Math.max(mp[i - 1], mp[i - 1] + (prices[i] - prices[i - 1]))
    }
    
    return mp[m - 1]
};
