/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ret = 0
    let cur = 0
    
    for (let i = 1; i < prices.length; i++){
        cur += prices[i] - prices[i - 1]
        cur = Math.max(cur, 0)
        ret = Math.max(ret, cur)
    }
    
    return ret
};
